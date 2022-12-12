import { render, screen } from '@testing-library/react';
import * as React from 'react';
import userEvent from '@testing-library/user-event';
import DaySelectorItem from '../../../../src/views/components/day-selector-item';

describe('day selector item', () => {
  const mockData = {
    index: 0,
    dt_txt: '2022-12-11 12:00:00',
    weather_temp: {
      temp_min: 0,
      temp_max: 3,
    },
    activeIndex: 0,
    forecast: {
      id: 0,
      description: 'sunny',
      main: 'no clouds',
      icon: 'sun',
    },
  };
  const handleClick = jest.fn();

  it('renders correctly', async () => {
    render(
      <DaySelectorItem
        forecast={mockData.forecast}
        weather_temp={mockData.weather_temp}
        handleClick={handleClick}
        index={mockData.index}
        date={mockData.dt_txt}
        activeIndex={mockData.activeIndex}
      />,
    );

    expect(screen.getByTestId('day-selector-item')).toBeInTheDocument();
    expect(screen.getByText('Today')).toBeInTheDocument();
    expect(
      screen.getByText(mockData.weather_temp.temp_min),
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockData.weather_temp.temp_max),
    ).toBeInTheDocument();

    expect(screen.getByRole('img').getAttribute('title')).toEqual(
      mockData.forecast.main,
    );
    expect(screen.getByRole('img').getAttribute('alt')).toEqual(
      mockData.forecast.description,
    );
    expect(screen.getByRole('img').getAttribute('src')).toEqual(
      'http://openweathermap.org/img/wn/sun@2x.png',
    );

    await userEvent.click(screen.getByTestId('day-selector-item'));
    expect(handleClick).toHaveBeenCalled();
  });
  it('should render week day when index is not 0', () => {
    render(
      <DaySelectorItem
        forecast={mockData.forecast}
        weather_temp={mockData.weather_temp}
        handleClick={handleClick}
        index={1}
        date={mockData.dt_txt}
        activeIndex={mockData.activeIndex}
      />,
    );

    expect(screen.getByText('Sun')).toBeInTheDocument();
  });
});
