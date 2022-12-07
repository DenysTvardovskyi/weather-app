import WeatherInfo from '../../../../src/views/components/weather-info';
import { render, screen } from '@testing-library/react';
import * as React from 'react';

describe('weather-info', () => {
  it('renders correctly', () => {
    const mockedData = {
      dt: 1670360400,
      main: {
        temp: 1.13,
        feels_like: -1.46,
        temp_min: 1.13,
        temp_max: 1.13,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 982,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.28,
        deg: 139,
        gust: 5.12,
      },
      visibility: 1009,
      pop: 0.33,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-06 21:00:00',
    };
    const name = 'Test';

    render(<WeatherInfo data={mockedData} name={name} />);

    expect(screen.getByText('33')).toBeInTheDocument();
    expect(screen.getByText('98')).toBeInTheDocument();
    expect(screen.getByText('2.28')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Clouds')).toBeInTheDocument();
  });
});
