export interface IOption {
  label: string;
  value: Coordinate;
}

type lat = number;
type lon = number;

type Coordinate = [lat, lon];
