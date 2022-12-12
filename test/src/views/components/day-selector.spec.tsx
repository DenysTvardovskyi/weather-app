import { render, screen } from '@testing-library/react';
import * as React from 'react';
import DaySelector from '../../../../src/views/components/day-selector';
import { mockedFilteredData } from '../../../utils/mockedData';

describe('day selector', () => {
  const mockActiveIndex = 0;

  const handleClick = jest.fn();

  it('renders correctly', () => {
    render(
      <DaySelector
        handleClick={handleClick}
        activeIndex={mockActiveIndex}
        filteredDataByDay={mockedFilteredData}
      />,
    );

    expect(screen.getByTestId('day-selector')).toBeInTheDocument();
    expect(screen.getAllByTestId('day-selector-item')).toHaveLength(
      mockedFilteredData.length,
    );
  });
});
