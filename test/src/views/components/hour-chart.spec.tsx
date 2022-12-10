import { render, screen } from '@testing-library/react';
import * as React from 'react';
import userEvent from '@testing-library/user-event';
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
  it('renders', () => {
    const user = userEvent;
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

    const handleClick = jest.fn();
    const { container } = render(
      <HourChart data={mockedData} handleClick={handleClick} />,
    );
    expect(screen.getByTestId('chart-cont')).toBeInTheDocument();
  });
  // todo: chart test
  // it('renders correctly', async () => {
  //   const user = userEvent;
  //   const mockedData = [
  //     {
  //       main: {
  //         temp: 2,
  //       },
  //       dt_txt: '2022-12-06 15:00:00',
  //     },
  //     {
  //       main: {
  //         temp: 1,
  //       },
  //       dt_txt: '2022-12-06 18:00:00',
  //     },
  //     {
  //       main: {
  //         temp: 0,
  //       },
  //       dt_txt: '2022-12-06 21:00:00',
  //     },
  //   ];
  //
  //   const handleClick = jest.fn();
  //   const { container } = render(
  //     <HourChart data={mockedData} handleClick={handleClick} />,
  //   );
  //   const pieSectors = container.querySelectorAll('.recharts-dot');
  //
  //   await user.click(pieSectors[0]);
  //   // expect(screen.getByText('Temp : 2')).toBeInTheDocument();
  //   expect(handleClick).toHaveBeenCalledWith('');
  // });
});
