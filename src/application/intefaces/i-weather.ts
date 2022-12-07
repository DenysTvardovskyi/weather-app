export interface IWeatherResponse {
  city: ICityInfo;
  cnt: number;
  cod: string;
  list: IForecast[];
}

export interface ICityInfo {
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IClouds {
  all: number;
}

export interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface ISys {
  pod: string;
}

export interface IForecast {
  dt: number;
  main: IMain;
  weather: IWeather[];
  clouds: IClouds;
  wind: IWind;
  visibility: number;
  pop: number;
  sys: ISys;
  dt_txt: string;
}

export interface IWeatherInfoData {
  weather: IWeather;
  temp: number;
  pop: number;
  humidity: number;
  wind_speed: number;
  dt_txt: string;
}
