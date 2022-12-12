import useSortWeatherByDate from '../../../../src/application/hooks/useSortWeatherByDate';
import { act, renderHook } from '@testing-library/react';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import * as React from 'react';
import citySliceReducer, {
  setCityWeather,
} from '../../../../src/redux/slices/citySlice';
import { MockedUnsortedWeather } from '../../../utils/mockedData';

describe('useSortWeatherByDate hook', () => {
  const ReduxProvider = ({ children, reduxStore }) => (
    <Provider store={reduxStore}>{children}</Provider>
  );
  it('sort weather by date and select one section off the day', async () => {
    const store = configureStore({
      reducer: {
        city: citySliceReducer,
      },
    });
    const wrapper = ({ children }) => (
      <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
    );
    const { result } = renderHook(() => useSortWeatherByDate(), { wrapper });
    expect(result.current.filteredDataByDay).toEqual([]);

    await act(() => {
      store.dispatch(setCityWeather(MockedUnsortedWeather));
    });

    expect(result.current.filteredDataByDay).toHaveLength(6);
    expect(result.current.weatherInfo(0, 0)).toEqual({
      dt_txt: '2022-12-12 03:00:00',
      humidity: 93,
      pop: 0,
      temp: -4.23,
      weather: {
        description: 'overcast clouds',
        icon: '04n',
        id: 804,
        main: 'Clouds',
      },
      wind_speed: 5.89,
    });

    // testing time section that is out of range
    expect(result.current.weatherInfo(0, 9)).toEqual({
      dt_txt: '2022-12-12 03:00:00',
      humidity: 93,
      pop: 0,
      temp: -4.23,
      weather: {
        description: 'overcast clouds',
        icon: '04n',
        id: 804,
        main: 'Clouds',
      },
      wind_speed: 5.89,
    });
  });
});
