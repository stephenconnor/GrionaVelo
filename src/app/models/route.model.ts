export interface Route {
  id: string;
  title: string;
  image: string;
  distance: number;
  ascent: number;
  maxAltitude: number;
  description: string;
  detailedDescription: string;
  extraImage: string;
  gpxFile?: string;
}

export interface RouteCategory {
  id: string;
  label: string;
  routes: Route[];
}

export interface RoutesData {
  categories: RouteCategory[];
}
