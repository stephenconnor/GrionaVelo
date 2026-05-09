#!/usr/bin/env python3
"""
GPX Bike Ride Visualizer

Creates:
- Strava-style route maps
- Strava-style elevation profiles
- Town labels
- Recursive GPX folder scanning
- routes.json metadata export

Outputs are saved beside each GPX file.
"""

import sys
import math
import json
import xml.etree.ElementTree as ET
from pathlib import Path

# ============================================================
# CONFIG
# ============================================================

INPUT_PATH = r"G:\Git\cycling-routes\src\assets\gpx_files"

RECURSIVE_SCAN = True

TOWN_LABEL_DISTANCE_KM = 15

# Max output image heights
MAP_IMAGE_HEIGHT_PX = 220
PROFILE_IMAGE_HEIGHT_PX = 180

# Route separation threshold
LONG_ROUTE_THRESHOLD_KM = 100

# ============================================================
# AUTO INSTALL
# ============================================================

def pip_install(package):

    import subprocess

    subprocess.check_call(
        [sys.executable, "-m", "pip", "install", package]
    )


try:
    import numpy as np
except ImportError:
    pip_install("numpy")
    import numpy as np

try:
    import matplotlib.pyplot as plt
except ImportError:
    pip_install("matplotlib")
    import matplotlib.pyplot as plt

try:
    import requests
except ImportError:
    pip_install("requests")
    import requests

try:
    import contextily as ctx
except ImportError:
    pip_install("contextily")
    import contextily as ctx

try:
    from pyproj import Transformer
except ImportError:
    pip_install("pyproj")
    from pyproj import Transformer


# ============================================================
# GLOBAL STYLE
# ============================================================

plt.rcParams["font.family"] = "DejaVu Sans"


# ============================================================
# TOWN CACHE
# ============================================================

TOWN_CACHE = {}


def get_town_name(lat, lon):

    key = (round(lat, 3), round(lon, 3))

    if key in TOWN_CACHE:
        return TOWN_CACHE[key]

    try:

        url = "https://nominatim.openstreetmap.org/reverse"

        params = {
            "lat": lat,
            "lon": lon,
            "format": "json",
            "zoom": 10,
            "addressdetails": 1,
        }

        headers = {
            "User-Agent": "gpx-visualizer"
        }

        r = requests.get(
            url,
            params=params,
            headers=headers,
            timeout=5
        )

        r.raise_for_status()

        data = r.json()

        address = data.get("address", {})

        town = (
            address.get("town")
            or address.get("city")
            or address.get("village")
            or address.get("hamlet")
            or address.get("county")
        )

        TOWN_CACHE[key] = town

        return town

    except Exception:
        return None


def get_towns_along_route(
    points,
    min_distance_km=TOWN_LABEL_DISTANCE_KM
):

    dists = cumulative_distances(points)

    towns = []

    last_added = -min_distance_km

    for i, d in enumerate(dists):

        if d - last_added >= min_distance_km:

            lat, lon = points[i][0], points[i][1]

            town = get_town_name(lat, lon)

            if town and town not in [t[0] for t in towns]:

                towns.append((town, lat, lon))

                last_added = d

    return towns


# ============================================================
# GPX PARSER
# ============================================================

def parse_gpx(filepath):

    tree = ET.parse(filepath)

    root = tree.getroot()

    ns = ""

    if root.tag.startswith("{"):
        ns = root.tag.split("}")[0] + "}"

    points = []

    for trkpt in root.iter(f"{ns}trkpt"):

        lat = float(trkpt.attrib["lat"])
        lon = float(trkpt.attrib["lon"])

        ele_el = trkpt.find(f"{ns}ele")

        ele = float(ele_el.text) if ele_el is not None else 0.0

        points.append((lat, lon, ele))

    if not points:
        raise ValueError("No track points found in GPX.")

    return points


# ============================================================
# DISTANCE HELPERS
# ============================================================

def haversine(lat1, lon1, lat2, lon2):

    R = 6371000

    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)

    dphi = math.radians(lat2 - lat1)
    dlambda = math.radians(lon2 - lon1)

    a = (
        math.sin(dphi / 2) ** 2
        + math.cos(phi1)
        * math.cos(phi2)
        * math.sin(dlambda / 2) ** 2
    )

    return 2 * R * math.asin(math.sqrt(a))


def cumulative_distances(points):

    dists = [0.0]

    for i in range(1, len(points)):

        d = haversine(
            points[i - 1][0],
            points[i - 1][1],
            points[i][0],
            points[i][1]
        )

        dists.append(dists[-1] + d / 1000)

    return dists


# ============================================================
# ROUTE STATS
# ============================================================

def calculate_route_stats(points):

    dists = cumulative_distances(points)

    eles = [p[2] for p in points]

    total_distance_km = round(dists[-1], 1)

    total_ascent_m = round(sum(
        max(0, eles[i] - eles[i - 1])
        for i in range(1, len(eles))
    ))

    max_altitude_m = round(max(eles))

    return {
        "distance": total_distance_km,
        "ascent": total_ascent_m,
        "maxAltitude": max_altitude_m,
    }


# ============================================================
# FIND GPX FILES
# ============================================================

def find_gpx_files(input_path, recursive=True):

    path = Path(input_path)

    if path.is_file():

        if path.suffix.lower() == ".gpx":
            return [path]

        return []

    if not path.exists():
        return []

    if recursive:
        files = list(path.rglob("*.gpx"))
    else:
        files = list(path.glob("*.gpx"))

    return sorted(files)


# ============================================================
# STRAVA STYLE MAP
# ============================================================

def make_route_map(points, output_path):

    lats = np.array([p[0] for p in points])
    lons = np.array([p[1] for p in points])

    transformer = Transformer.from_crs(
        "EPSG:4326",
        "EPSG:3857",
        always_xy=True
    )

    x, y = transformer.transform(lons, lats)

    # 220px high output
    fig_width = 10
    fig_height = MAP_IMAGE_HEIGHT_PX / 100

    fig, ax = plt.subplots(
        figsize=(fig_width, fig_height)
    )

    fig.patch.set_facecolor("white")

    pad = 2500

    ax.set_xlim(min(x) - pad, max(x) + pad)
    ax.set_ylim(min(y) - pad, max(y) + pad)

    ctx.add_basemap(
        ax,
        source=ctx.providers.CartoDB.Positron,
        attribution=False
    )

    # Route halo
    ax.plot(
        x,
        y,
        color="white",
        linewidth=8,
        solid_capstyle="round",
        zorder=3
    )

    # Main route
    ax.plot(
        x,
        y,
        color="#FC4C02",
        linewidth=4.5,
        solid_capstyle="round",
        zorder=4
    )

    # Start marker
    ax.scatter(
        x[0],
        y[0],
        s=120,
        color="#2ecc71",
        edgecolors="white",
        linewidths=2,
        zorder=5
    )

    # Finish marker
    ax.scatter(
        x[-1],
        y[-1],
        s=120,
        color="#111111",
        edgecolors="white",
        linewidths=2,
        zorder=5
    )

    # Town labels
    towns = get_towns_along_route(points)

    used_positions = []

    for town, lat, lon in towns:

        tx, ty = transformer.transform(lon, lat)

        too_close = False

        for px, py in used_positions:

            if abs(tx - px) < 8000 and abs(ty - py) < 8000:
                too_close = True
                break

        if too_close:
            continue

        used_positions.append((tx, ty))

        ax.text(
            tx,
            ty,
            town,
            fontsize=10,
            color="#333333",
            fontweight="bold",
            bbox=dict(
                facecolor="white",
                alpha=0.85,
                edgecolor="none",
                pad=2
            ),
            zorder=6
        )

    ax.set_xticks([])
    ax.set_yticks([])

    for spine in ax.spines.values():
        spine.set_visible(False)

    plt.tight_layout()

    fig.savefig(
        output_path,
        dpi=100,
        bbox_inches="tight"
    )

    plt.close(fig)

    print(f"✓ Map saved → {output_path}")


# ============================================================
# STRAVA STYLE PROFILE
# ============================================================

def make_elevation_profile(points, output_path):

    eles = np.array([p[2] for p in points])

    dists = np.array(cumulative_distances(points))

    kernel_size = max(3, len(eles) // 300)

    kernel = np.ones(kernel_size) / kernel_size

    eles_smooth = np.convolve(
        eles,
        kernel,
        mode="same"
    )

    total_km = dists[-1]

    gain = sum(
        max(0, eles[i] - eles[i - 1])
        for i in range(1, len(eles))
    )

    max_ele = eles.max()

    # 180px high output
    fig_width = 14
    fig_height = PROFILE_IMAGE_HEIGHT_PX / 100

    fig, ax = plt.subplots(
        figsize=(fig_width, fig_height)
    )

    fig.patch.set_facecolor("white")

    ax.set_facecolor("white")

    base = eles_smooth.min() - 20

    ax.fill_between(
        dists,
        base,
        eles_smooth,
        color="#FC4C02",
        alpha=0.92
    )

    ax.plot(
        dists,
        eles_smooth,
        color="#d84300",
        linewidth=1.4
    )

    grades = np.gradient(
        eles_smooth,
        dists * 1000 + 1e-9
    ) * 100

    steep = grades >= 7

    ax.fill_between(
        dists,
        base,
        eles_smooth,
        where=steep,
        color="#8b0000",
        alpha=0.35
    )

    ax.grid(
        True,
        axis="y",
        linestyle="-",
        linewidth=0.6,
        alpha=0.15
    )

    ax.grid(False, axis="x")

    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)

    ax.spines["left"].set_color("#dddddd")
    ax.spines["bottom"].set_color("#dddddd")

    ax.tick_params(
        colors="#666666",
        labelsize=9
    )

    ax.set_xlabel(
        "Distance (km)",
        fontsize=10,
        color="#666666"
    )

    ax.set_ylabel(
        "Elevation (m)",
        fontsize=10,
        color="#666666"
    )

    ax.set_xlim(0, total_km)

    pad = (eles_smooth.max() - eles_smooth.min()) * 0.15

    ax.set_ylim(
        base,
        eles_smooth.max() + pad
    )

    stats = (
        f"{total_km:.1f} km    "
        f"↑ {gain:.0f} m    "
        f"Max {max_ele:.0f} m"
    )

    ax.text(
        0.01,
        1.04,
        stats,
        transform=ax.transAxes,
        fontsize=13,
        fontweight="bold",
        color="#222222"
    )

    ax.set_title(
        "Elevation Profile",
        loc="left",
        fontsize=16,
        fontweight="bold",
        pad=22
    )

    plt.tight_layout()

    fig.savefig(
        output_path,
        dpi=100,
        bbox_inches="tight"
    )

    plt.close(fig)

    print(f"✓ Profile saved → {output_path}")


# ============================================================
# MAIN
# ============================================================

def main():

    gpx_files = find_gpx_files(
        INPUT_PATH,
        recursive=RECURSIVE_SCAN
    )

    if not gpx_files:

        print("No GPX files found.")
        sys.exit(1)

    print(f"Found {len(gpx_files)} GPX files")

    success = 0
    failed = 0

    short_routes = []
    long_routes = []

    for gpx_path in gpx_files:

        try:

            print("\n================================================")
            print(f"Processing: {gpx_path}")

            map_output = gpx_path.with_name(
                f"{gpx_path.stem}_map.png"
            )

            profile_output = gpx_path.with_name(
                f"{gpx_path.stem}_profile.png"
            )

            points = parse_gpx(gpx_path)

            print(f"Points: {len(points)}")

            make_route_map(
                points,
                map_output
            )

            make_elevation_profile(
                points,
                profile_output
            )

            stats = calculate_route_stats(points)

            route_obj = {
                "title": gpx_path.stem,
                "image": str(map_output),
                "distance": stats["distance"],
                "ascent": stats["ascent"],
                "maxAltitude": stats["maxAltitude"],
                "description": "",
                "detailedDescription": "",
                "extraImage": str(profile_output),
                "gpxFile": str(gpx_path)
            }

            if stats["distance"] >= LONG_ROUTE_THRESHOLD_KM:
                long_routes.append(route_obj)
            else:
                short_routes.append(route_obj)

            success += 1

        except Exception as e:

            failed += 1

            print(f"ERROR processing {gpx_path}")
            print(str(e))

    routes_json = {
        "shortRoutes": short_routes,
        "longRoutes": long_routes
    }

    output_json = Path(INPUT_PATH) / "routes_metadata.json"

    with open(output_json, "w", encoding="utf-8") as f:

        json.dump(
            routes_json,
            f,
            indent=4,
            ensure_ascii=False
        )

    print("\n================================================")
    print("Finished")
    print(f"Successful: {success}")
    print(f"Failed: {failed}")
    print(f"Short routes: {len(short_routes)}")
    print(f"Long routes: {len(long_routes)}")
    print(f"JSON written: {output_json}")


if __name__ == "__main__":
    main()