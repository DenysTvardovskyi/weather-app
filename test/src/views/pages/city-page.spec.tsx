import { HashRouter } from 'react-router-dom';
import { screen, render, act } from '@testing-library/react';
import * as React from 'react';
import CityPage from '../../../../src/views/pages/city-page';
import { Provider } from 'react-redux';
import store from '../../../../src/redux/store';
import {
  setCity,
  setCityWeather,
} from '../../../../src/redux/slices/citySlice';
import { MockedUnsortedWeather } from '../../../utils/mockedData';

const wrapper = ({ children }: any) => (
  <Provider store={store}>{children}</Provider>
);

describe('city page component', () => {
  const MockRouter = () => {
    return (
      <HashRouter>
        <CityPage />
      </HashRouter>
    );
  };

  it('renders correctly with empty state', () => {
    render(<MockRouter />, { wrapper });

    expect(screen.getByText('Back to Dashboard')).toBeInTheDocument();
  });

  it('renders correctly', async () => {
    const mockedCity = {
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
    };

    await act(() => {
      store.dispatch(setCity(mockedCity));
      store.dispatch(setCityWeather(MockedUnsortedWeather));
    });

    render(<MockRouter />, { wrapper });

    expect(screen.getByText('Back')).toBeInTheDocument();

    expect(screen.getByTestId('weather-info')).toBeInTheDocument();
    expect(screen.getByTestId('chart-cont')).toBeInTheDocument();
    expect(screen.getByTestId('day-selector')).toBeInTheDocument();
  });
});
