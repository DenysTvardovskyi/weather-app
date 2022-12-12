import { render, screen } from '@testing-library/react';
import * as React from 'react';
import HourChart from '../../../../src/views/components/hour-chart';

const { ResizeObserver } = window;

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete window.ResizeObserver;
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts');
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: any) => (
      <OriginalModule.ResponsiveContainer width={800} height={800}>
        {children}
      </OriginalModule.ResponsiveContainer>
    ),
  };
});

afterEach(() => {
  window.ResizeObserver = ResizeObserver;
  jest.restoreAllMocks();
});

describe('search-option', () => {
  const mockedData: any = [
    {
      main: {
        temp: 2,
      },
      dt_txt: '2022-12-06 15:00:00',
    },
    {
      main: {
        temp: 1,
      },
      dt_txt: '2022-12-06 18:00:00',
    },
    {
      main: {
        temp: 0,
      },
      dt_txt: '2022-12-06 21:00:00',
    },
  ];
  it('renders', () => {
    const handleClick = jest.fn();
    render(<HourChart data={mockedData} handleClick={handleClick} />);
    expect(screen.getByTestId('chart-cont')).toBeInTheDocument();
    expect(screen.getByText('3 PM')).toBeInTheDocument();
    expect(screen.getByText('6 PM')).toBeInTheDocument();
    expect(screen.getByText('9 PM')).toBeInTheDocument();
  });
});
