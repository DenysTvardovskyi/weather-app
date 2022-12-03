export interface IOption {
  label: string;
  value: Coordinate;
}

type lat = number;
type lon = number;

export type Coordinate = [lat, lon];
