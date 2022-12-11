import MockAdapter from 'axios-mock-adapter';
import store from '../../../../src/redux/store';
import axios from 'axios';
import {
  fetchWeather,
  setCoordinates,
} from '../../../../src/redux/slices/citySlice';

const weatherUrl =
  'https://api.openweathermap.org/data/2.5/forecast?lon=24.0316&lat=49.842&units=metric&appid=a8efff59c2b5c3436b8724b3620fe537';

const mockResponse = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1670760000,
      main: {
        temp: -1.54,
        feels_like: -6.95,
        temp_min: -1.83,
        temp_max: -1.54,
        pressure: 995,
        sea_level: 995,
        grnd_level: 960,
        humidity: 97,
        temp_kf: 0.29,
      },
      weather: [
        {
          id: 601,
          main: 'Snow',
          description: 'snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.18,
        deg: 294,
        gust: 8.39,
      },
      visibility: 157,
      pop: 1,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-12-11 12:00:00',
    },
  ],
  city: {
    id: 702550,
    name: 'Lviv',
    coord: {
      lat: 49.842,
      lon: 24.0316,
    },
    country: 'UA',
    population: 15000,
    timezone: 7200,
    sunrise: 1670739087,
    sunset: 1670768571,
  },
};

const mockWeatherResponse = () => {
  const mock = new MockAdapter(axios);
  mock.onGet(weatherUrl).reply(200, mockResponse);
};

describe('City redux state tests', () => {
  beforeAll(() => {
    mockWeatherResponse();
  });

  it('Should be able to fetch the weather for a specific city', async () => {
    expect(weatherUrl).toEqual(
      'https://api.openweathermap.org/data/2.5/forecast?lon=24.0316&lat=49.842&units=metric&appid=a8efff59c2b5c3436b8724b3620fe537',
    );
    const result = await store.dispatch(fetchWeather([24.0316, 49.842]));
    const options = result.payload;
    expect(options).toEqual('');
    expect(result.type).toBe('weather/fetch/fulfilled');
    expect(store.getState().city).toEqual('');
  });

  it('Should be able to set data', () => {
    store.dispatch(setCoordinates([24.0316, 49.842]));
    const coordinates = store.getState().city.coordinates;
    expect(coordinates).toEqual([24.0316, 49.842]);
  });
});
