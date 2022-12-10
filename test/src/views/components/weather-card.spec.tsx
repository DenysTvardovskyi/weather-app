import { render, screen } from '@testing-library/react';
import * as React from 'react';
import WeatherCard from '../../../../src/views/components/weather-card';
import store from '../../../../src/redux/store';
import { Provider } from 'react-redux';

describe('weather-card', () => {
  const wrapper = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
  );
  it('renders correctly', () => {
    const mockedData = {
      city: {
        coord: {
          lat: 48.9225,
          lon: 24.7103,
        },
        name: 'Ivano-Frankivsk',
      },
      main: {
        temp_max: 1.71,
        temp_min: 1.72,
      },
      weather: {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    };
    const active = false;

    render(
      <WeatherCard
        name={mockedData.city.name}
        coord={mockedData.city.coord}
        main_temp={mockedData.main}
        icon={mockedData.weather.icon}
        active={active}
      />,
      { wrapper },
    );
    expect(screen.getByTestId('weather-card')).toBeInTheDocument();
    expect(screen.getByText('1.71°')).toBeInTheDocument();
    expect(screen.getByRole('img').getAttribute('src')).toEqual(
      'http://openweathermap.org/img/wn/04n@2x.png',
    );
  });
});
