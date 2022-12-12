import { act, render, screen } from '@testing-library/react';
import * as React from 'react';
import store from '../../../../src/redux/store';
import userEvent from '@testing-library/user-event';
import SearchBar from '../../../../src/views/components/search-bar';
import { Provider } from 'react-redux';
import { fetchOptions } from '../../../../src/redux/slices/searchSlice';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

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

describe('search-bar', () => {
  const mockNetworkResponse = () => {
    const mock = new MockAdapter(axios);
    mock.onGet(url).reply(200, mockResponse);
  };

  beforeAll(() => {
    mockNetworkResponse();
  });

  const state = store.getState().search;
  const wrapper = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
  );
  it('Should initially set criteria to an empty string', () => {
    expect(state.criteria).toEqual('');
  });

  it('renders correctly', async () => {
    render(<SearchBar />, {
      wrapper,
    });
    expect(screen.getByPlaceholderText('Add a location')).toBeInTheDocument();
    await userEvent.click(screen.getByPlaceholderText('Add a location'));
    expect(screen.getByText('No options')).toBeInTheDocument();
  });

  it('should be able to type new data', async () => {
    render(<SearchBar />, {
      wrapper,
    });
    const searchEl = screen.getByPlaceholderText('Add a location');
    await userEvent.type(searchEl, 'Lvi');
    expect(searchEl.value).toBe('Lvi');
  });

  it('should display selected city from dropdown list', async () => {
    render(<SearchBar />, {
      wrapper,
    });
    const searchEl = screen.getByPlaceholderText('Add a location');
    await userEvent.type(searchEl, 'Lvi');
    expect(searchEl.value).toBe('Lvi');
    await act(() => {
      store.dispatch(fetchOptions('Lvi'));
    });
    expect(store.getState().search.options).toHaveLength(1);
    expect(screen.getAllByTestId('search-option')).toHaveLength(1);
    await userEvent.click(screen.getAllByTestId('search-option')[0]);

    expect(store.getState().user.cityList).toHaveLength(1);
  });
});
