import WeatherInfo from '../../../../src/views/components/weather-info';
import { render, screen } from '@testing-library/react';
import * as React from 'react';

describe('weather-info', () => {
  it('renders correctly', () => {
    const mockedData = {
      temp: 1.13,
      weather: {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
      humidity: 98,
      wind_speed: 2.28,
      pop: 0.33,
      dt_txt: '2022-12-06 21:00:00',
    };
    const name = 'Test';

    render(<WeatherInfo data={mockedData} name={name} />);
    expect(screen.getByTestId('weather-icon-temp')).toBeInTheDocument();
    expect(screen.getByText('33')).toBeInTheDocument();
    expect(screen.getByText(mockedData.humidity)).toBeInTheDocument();
    expect(screen.getByText(mockedData.wind_speed)).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText('Tuesday, 9 PM')).toBeInTheDocument();
    expect(screen.getByText(mockedData.weather.main)).toBeInTheDocument();
  });
});
