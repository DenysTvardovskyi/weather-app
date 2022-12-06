export interface IOption {
  label: string;
  value: Coordinate;
}

type lat = number | string;
type lon = number | string;

export type Coordinate = [lon, lat];
