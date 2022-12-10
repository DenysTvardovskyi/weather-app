export interface IOption {
  label: string;
  value: Coordinate | number[];
}

type lat = number | string;
type lon = number | string;

export type Coordinate = [lon, lat];
