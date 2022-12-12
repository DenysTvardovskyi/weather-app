import MockAdapter from 'axios-mock-adapter';
import store from '../../../../src/redux/store';
import axios from 'axios';
import {
  fetchWeather,
  setCoordinates,
} from '../../../../src/redux/slices/citySlice';
import { MockedCity } from '../../../utils/mockedData';

const weatherUrl =
  'https://api.openweathermap.org/data/2.5/forecast?lon=24.0316&lat=49.842&units=metric&appid=a8efff59c2b5c3436b8724b3620fe537';

describe('City redux state tests', () => {
  const mockWeatherResponse = () => {
    const mock = new MockAdapter(axios);
    mock.onGet(weatherUrl).reply(200, MockedCity);
  };
  beforeAll(() => {
    mockWeatherResponse();
  });

  it('Should be able to fetch the weather for a specific city', async () => {
    const result = await store.dispatch(fetchWeather([24.0316, 49.842]));
    const options = result.payload;
    expect(result.type).toBe('weather/fetch/fulfilled');
    expect(store.getState().city.city).toEqual(options.city);
    expect(store.getState().city.cityWeather).toEqual(options.list);
  });

  it('Should be able to set data', () => {
    store.dispatch(setCoordinates([24.0316, 49.842]));
    const coordinates = store.getState().city.coordinates;
    expect(coordinates).toEqual([24.0316, 49.842]);
  });
});
