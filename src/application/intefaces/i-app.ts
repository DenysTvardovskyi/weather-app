import { Coordinate, IOption } from './i-option';
import { ICityInfo, IForecast } from './i-weather';

export interface IAppState {
  search: ISearch;
  city: ICity;
}

export interface ISearch {
  criteria: string;
  options: IOption[];
  status: Status;
  value: IOption | null;
}

export interface ICity {
  cityWeather: IForecast[];
  city: ICityInfo;
  coordinates: Coordinate | null;
  weatherByDay: IForecast[];
  status: Status;
}

export interface IUser {
  cityList: ICityListEl[];
  status: Status;
}

export interface ICityListEl {
  city: ICityInfo;
  weather: IForecast;
}

export type Status = 'idle' | 'loading' | 'success' | 'failed';

export interface IError {
  message?: string;
  statusText?: string;
}

export interface IGeoCoding {
  type: string;
  query: string[];
  features: IFeature[];
  attribution: string;
}

export interface IFeature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  text: string;
  place_name: string;
  matching_text: string;
  matching_place_name: string;
  center: number[];
  geometry: IGeometry;
  address: string;
  context: IContext[];
}

export interface IGeometry {
  type: string;
  coordinates: number[];
  interpolated?: boolean;
  omitted?: boolean;
}

export interface IContext {
  id: string;
  text: string;
  wikidata?: string;
  short_code?: string;
}
