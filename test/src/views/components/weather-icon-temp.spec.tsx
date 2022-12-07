import { render, screen } from '@testing-library/react';
import * as React from 'react';
import WeatherIconTemp from '../../../../src/views/components/weather-icon-temp';

describe('weather-icon-temp', () => {
  const mockedData = {
    id: 804,
    main: 'Clouds',
    description: 'overcast clouds',
    icon: '04n',
  };
  const temp = 100;

  it('renders correctly', () => {
    render(<WeatherIconTemp weather={mockedData} temp={temp} />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.getAttribute('title')).toEqual(mockedData?.main);
    expect(imgElement.getAttribute('alt')).toEqual(mockedData?.description);

    expect(screen.getByText('100 °')).toBeInTheDocument();
  });
});
