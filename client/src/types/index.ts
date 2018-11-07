// Translink api types
export interface BusInfo {
  VehicleNo: string;
  TripId: number;
  RouteNo: string;
  Direction: string;
  Destination: string;
  Pattern: string;
  Latitude: number;
  Longitude: number;
  RecordedTime: string;
  RouteMap: RouteMap;
}

export interface RouteMap {
  Href: string;
}

// MapBox types
export interface Viewport {
  altitude?: number;
  bearing?: number;
  height: number;
  latitude?: number;
  longitude?: number;
  maxPitch?: number;
  maxZoom?: number;
  minPitch?: number;
  minZoom?: number;
  pitch?: number;
  transitionDuration?: number;
  transitionEasing?: any;
  transitionInterpolator?: object;
  transitionInterruption?: number;
  width: number;
  zoom?: number;
}
