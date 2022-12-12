import MockAdapter from 'axios-mock-adapter';
import store from '../../../../src/redux/store';
import axios from 'axios';
import {
  fetchOptions,
  setCriteria,
  setOptions,
  setValue,
} from '../../../../src/redux/slices/searchSlice';

const OPTIONS_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const OPTIONS_API_KEY =
  'pk.eyJ1IjoidGRtZGVuIiwiYSI6ImNsYjg1bXhkejBnYWkzcGxrcm03eWQ1YWIifQ.2l4UJvJG6pg33e05Az6KmQ';
const url =
  OPTIONS_URL +
  `Lvi.json?access_token=${OPTIONS_API_KEY}&cachebuster=1625641871908&autocomplete=true&types=place`;

const mockResponse = {
  features: [
    {
      matching_place_name: 'Lviv, Lviv Oblast, Ukraine',
      center: [24.0316, 49.842],
    },
  ],
};

describe('Search redux state tests', () => {
  const mockNetworkResponse = () => {
    const mock = new MockAdapter(axios);
    mock.onGet(url).reply(200, mockResponse);
  };
  beforeAll(() => {
    mockNetworkResponse();
  });

  it('Should be able to fetch the cities list for a specific search criteria', async () => {
    store.dispatch(setCriteria('Lvi'));
    const citeria = store.getState().search.criteria;
    expect(citeria).toEqual('Lvi');
    const result = await store.dispatch(fetchOptions(citeria));
    const options = result.payload;

    expect(result.type).toBe('options/fetch/fulfilled');
    expect(store.getState().search.options).toEqual(options);
  });

  it('Should be able to set data', () => {
    store.dispatch(setCriteria('Lvi'));
    const citeria = store.getState().search.criteria;
    expect(citeria).toEqual('Lvi');

    store.dispatch(setOptions([{ label: 'Lviv', value: [0, 0] }]));
    const options = store.getState().search.options;
    expect(options).toEqual([{ label: 'Lviv', value: [0, 0] }]);

    store.dispatch(setValue('Lviv'));
    const value = store.getState().search.value;
    expect(value).toEqual('Lviv');
  });
});
