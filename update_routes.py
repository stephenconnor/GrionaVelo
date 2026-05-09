#!/usr/bin/env python3
"""
Update public/routes.json from GPX folders.

Workflow:
- Scan src/assets/gpx_files/longRoutes and shortRoutes.
- Generate missing map/profile images.
- Merge GPX metadata into public/routes.json.
- Preserve existing descriptions by default.
- Optionally call OpenAI web search to fill missing descriptions.
"""

import argparse
import json
import os
import re
import ssl
import sys
import urllib.request
from pathlib import Path

from gpx_visualizer import (
    calculate_route_stats,
    make_elevation_profile,
    make_route_map,
    parse_gpx,
)


ROOT = Path(__file__).resolve().parent
GPX_ROOT = ROOT / "src" / "assets" / "gpx_files"
PUBLIC_ROUTES_JSON = ROOT / "public" / "routes.json"

MODEL = os.environ.get("OPENAI_MODEL", "gpt-4o-mini")
WEB_SEARCH_TOOL = os.environ.get("OPENAI_WEB_SEARCH_TOOL", "web_search")


def web_path(path):
    return path.relative_to(ROOT / "src").as_posix()


def normalize_key(value):
    stem = Path(value).stem
    stem = re.sub(r"_(map|profile)$", "", stem, flags=re.IGNORECASE)
    stem = re.sub(r"^course_", "", stem, flags=re.IGNORECASE)
    return re.sub(r"[^a-z0-9]+", "", stem.lower())


def human_title(stem):
    title = re.sub(r"^COURSE[_-]?", "", stem, flags=re.IGNORECASE)
    title = title.replace("_", " ").replace("-", " ")
    title = re.sub(r"(?<=[a-z])(?=[A-Z])", " ", title)
    title = re.sub(r"\s+", " ", title).strip()
    return title


def load_routes_json():
    if not PUBLIC_ROUTES_JSON.exists():
        return {
            "categories": [
                {"id": "long", "label": "Long Routes", "routes": []},
                {"id": "short", "label": "Short Routes", "routes": []},
            ]
        }

    with PUBLIC_ROUTES_JSON.open("r", encoding="utf-8") as file:
        return json.load(file)


def category_by_id(data, category_id):
    for category in data["categories"]:
        if category["id"] == category_id:
            return category

    label = "Long Routes" if category_id == "long" else "Short Routes"
    category = {"id": category_id, "label": label, "routes": []}
    data["categories"].append(category)
    return category


def existing_route_index(data):
    index = {}

    for category in data["categories"]:
        for route in category["routes"]:
            keys = {
                route.get("title", ""),
                route.get("gpxFile", ""),
                route.get("image", ""),
                route.get("extraImage", ""),
            }

            for key in keys:
                normalized = normalize_key(key)
                if normalized:
                    index[normalized] = route

    return index


def next_route_id(routes, prefix):
    highest = 0

    for route in routes:
        route_id = route.get("id", "")
        match = re.fullmatch(rf"{prefix}(\d+)", route_id)
        if match:
            highest = max(highest, int(match.group(1)))

    return f"{prefix}{highest + 1}"


def scan_gpx_files():
    files = []

    for category_id in ("long", "short"):
        folder = GPX_ROOT / f"{category_id}Routes"
        for gpx_path in sorted(folder.glob("*.gpx")):
            files.append((category_id, gpx_path))

    return files


def route_points_summary(points, sample_count=12):
    if len(points) <= sample_count:
        selected = points
    else:
        step = (len(points) - 1) / (sample_count - 1)
        selected = [points[round(i * step)] for i in range(sample_count)]

    return [
        {
            "lat": round(point[0], 5),
            "lon": round(point[1], 5),
            "ele": round(point[2]),
        }
        for point in selected
    ]


def build_route_from_gpx(category_id, gpx_path, existing, generate_images=False):
    points = parse_gpx(gpx_path)
    stats = calculate_route_stats(points)

    map_path = gpx_path.with_name(f"{gpx_path.stem}_map.png")
    profile_path = gpx_path.with_name(f"{gpx_path.stem}_profile.png")

    if generate_images or not map_path.exists():
        make_route_map(points, map_path)

    if generate_images or not profile_path.exists():
        make_elevation_profile(points, profile_path)

    route = dict(existing) if existing else {}

    route.update(
        {
            "title": route.get("title") or human_title(gpx_path.stem),
            "image": web_path(map_path),
            "distance": stats["distance"],
            "ascent": stats["ascent"],
            "maxAltitude": stats["maxAltitude"],
            "description": route.get("description", ""),
            "detailedDescription": route.get("detailedDescription", ""),
            "extraImage": web_path(profile_path),
            "gpxFile": web_path(gpx_path),
        }
    )

    return route, points


def openai_route_copy(route, points):
    api_key = os.environ.get("OPENAI_API_KEY")

    if not api_key:
        raise RuntimeError("OPENAI_API_KEY is not set.")

    payload = {
        "model": MODEL,
        "tools": [{"type": WEB_SEARCH_TOOL}],
        "input": [
            {
                "role": "system",
                "content": (
                    "You write concise, accurate road cycling route copy for a "
                    "Girona/Catalunya cycling web app. Use web search to identify "
                    "well-known climbs, towns, roads, and terrain where helpful. "
                    "Return only valid JSON."
                ),
            },
            {
                "role": "user",
                "content": json.dumps(
                    {
                        "route": {
                            "title": route["title"],
                            "distanceKm": route["distance"],
                            "ascentM": route["ascent"],
                            "maxAltitudeM": route["maxAltitude"],
                            "gpxFile": route["gpxFile"],
                        },
                        "samplePoints": route_points_summary(points),
                        "requiredJsonShape": {
                            "title": "Optional improved display title",
                            "routeDescription": (
                                "One polished paragraph for the card description."
                            ),
                            "detailedDescription": (
                                "Everything after the route description. Use 4-6 "
                                "numbered sections in plain text."
                            ),
                        },
                    },
                    ensure_ascii=False,
                ),
            },
        ],
    }

    request = urllib.request.Request(
        "https://api.openai.com/v1/responses",
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    ssl_context = None
    if os.environ.get("OPENAI_VERIFY_SSL", "1") == "0":
        ssl_context = ssl._create_unverified_context()

    with urllib.request.urlopen(request, timeout=120, context=ssl_context) as response:
        data = json.loads(response.read().decode("utf-8"))

    text = data.get("output_text")
    if not text:
        text_parts = []
        for item in data.get("output", []):
            for content in item.get("content", []):
                if content.get("type") in {"output_text", "text"}:
                    text_parts.append(content.get("text", ""))
        text = "\n".join(text_parts).strip()

    match = re.search(r"\{.*\}", text, re.DOTALL)
    if not match:
        raise RuntimeError(f"OpenAI response did not contain JSON: {text}")

    copy = json.loads(match.group(0))

    return {
        "title": copy.get("title") or route["title"],
        "description": copy["routeDescription"].strip(),
        "detailedDescription": copy["detailedDescription"].strip(),
    }


def merge_routes(args):
    data = load_routes_json()
    existing_index = existing_route_index(data)
    scanned = scan_gpx_files()
    scanned_keys = {normalize_key(gpx_path.stem) for _, gpx_path in scanned}

    rebuilt = {"long": [], "short": []}
    generated_copy = 0

    for category_id, gpx_path in scanned:
        existing = existing_index.get(normalize_key(gpx_path.stem))
        route, points = build_route_from_gpx(
            category_id,
            gpx_path,
            existing,
            generate_images=args.force_images,
        )

        needs_copy = not route.get("description") or not route.get("detailedDescription")

        if args.generate_descriptions and needs_copy:
            print(f"Generating route copy: {route['title']}")
            copy = openai_route_copy(route, points)
            route["title"] = copy["title"]
            route["description"] = copy["description"]
            route["detailedDescription"] = copy["detailedDescription"]
            generated_copy += 1

        rebuilt[category_id].append(route)

    for category_id in ("long", "short"):
        category = category_by_id(data, category_id)
        prefix = "lr" if category_id == "long" else "sr"

        routes = rebuilt[category_id]

        if not args.prune_missing:
            for route in category["routes"]:
                route_key = normalize_key(route.get("gpxFile") or route.get("title", ""))
                if route_key not in scanned_keys:
                    routes.append(route)

        for route in routes:
            if not route.get("id"):
                route["id"] = next_route_id(routes, prefix)

        category["routes"] = routes

    if not args.dry_run:
        with PUBLIC_ROUTES_JSON.open("w", encoding="utf-8", newline="\n") as file:
            json.dump(data, file, indent=2, ensure_ascii=False)
            file.write("\n")

    return len(scanned), generated_copy


def main():
    parser = argparse.ArgumentParser(
        description="Scan GPX folders and update public/routes.json."
    )
    parser.add_argument(
        "--force-images",
        action="store_true",
        help="Regenerate map and profile images even if they already exist.",
    )
    parser.add_argument(
        "--generate-descriptions",
        action="store_true",
        help="Use OpenAI web search to fill missing route descriptions.",
    )
    parser.add_argument(
        "--prune-missing",
        action="store_true",
        help="Remove routes from routes.json when no matching GPX file exists.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Scan and build the route data without writing public/routes.json.",
    )
    args = parser.parse_args()

    scanned_count, generated_copy = merge_routes(args)

    print(f"Scanned GPX files: {scanned_count}")
    print(f"Generated descriptions: {generated_copy}")
    if args.dry_run:
        print("Dry run: public/routes.json was not changed.")
    else:
        print(f"Updated: {PUBLIC_ROUTES_JSON}")


if __name__ == "__main__":
    main()
