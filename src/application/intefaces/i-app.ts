import { IOption } from './i-option';

export interface IAppState {
  search: ISearch;
  city: [];
}

export interface ISearch {
  criteria: string;
  options: IOption[];
  status: Status;
  value: IOption | null;
}

export interface ICity {
  cityList: IOption[];
  status: Status;
}

export type Status = 'idle' | 'loading' | 'success' | 'failed';

export interface IError {
  message: string;
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
