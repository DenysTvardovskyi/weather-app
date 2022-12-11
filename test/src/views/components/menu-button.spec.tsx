import { Provider } from 'react-redux';
import store from '../../../../src/redux/store';
import * as React from 'react';
import { act, render, screen } from '@testing-library/react';
import MenuButton from '../../../../src/views/components/menu-button';
import userEvent from '@testing-library/user-event';
import { addCity } from '../../../../src/redux/slices/userSlice';

describe('menu btn component', () => {
  const mockCoord = { lon: 24.0316, lat: 49.842 };
  const mockName = 'Lviv';

  const wrapper = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
  );
  const user = userEvent.setup();

  const mockCity = {
    city: {
      name: 'Lviv',
      coord: {
        lat: 49.842,
        lon: 24.0316,
      },
    },
    list: [
      {
        main: {
          temp_max: 1,
          temp_min: -2,
        },
        weather: [
          {
            icon: 'sun',
          },
        ],
      },
    ],
  };

  it('renders correctly', async () => {
    render(<MenuButton name={mockName} coord={mockCoord} />, {
      wrapper,
    });

    const openMenuBtn = screen.getByTestId('menu-icon');
    expect(openMenuBtn).toBeInTheDocument();
  });

  it('Show button when opened', async () => {
    render(<MenuButton name={mockName} coord={mockCoord} />, {
      wrapper,
    });

    const openMenuBtn = screen.getByTestId('menu-icon');
    expect(openMenuBtn).toBeInTheDocument();

    await user.click(openMenuBtn);

    expect(screen.getByTestId('menu-body')).toBeInTheDocument();
    expect(screen.getByText('Remove')).toBeInTheDocument();
    expect(screen.getByText('Refresh')).toBeInTheDocument();
  });

  it('Handle remove', async () => {
    const { getByTestId, getByRole } = render(
      <MenuButton name={mockName} coord={mockCoord} />,
      {
        wrapper,
      },
    );
    expect(store.getState().user.cityList).toHaveLength(0);

    await act(() => {
      store.dispatch(addCity(mockCity));
      store.dispatch(addCity(mockCity));
    });

    expect(store.getState().user.cityList).toHaveLength(1);

    const openMenuBtn = getByTestId('menu-icon');
    expect(openMenuBtn).toBeInTheDocument();

    await user.click(openMenuBtn);

    expect(getByTestId('menu-body')).toBeInTheDocument();
    expect(screen.getByText('Remove')).toBeInTheDocument();
    await user.click(screen.getByText('Remove'));
    expect(store.getState().user.cityList).toHaveLength(0);
  });

  it('Handle refresh', async () => {
    const { getByTestId } = render(
      <MenuButton name={mockName} coord={mockCoord} />,
      {
        wrapper,
      },
    );
    expect(store.getState().user.cityList).toHaveLength(0);

    await act(() => {
      store.dispatch(addCity(mockCity));
    });

    expect(store.getState().user.cityList).toHaveLength(1);

    const openMenuBtn = getByTestId('menu-icon');
    expect(openMenuBtn).toBeInTheDocument();

    await user.click(openMenuBtn);

    expect(getByTestId('menu-body')).toBeInTheDocument();
    expect(screen.getByText('Refresh')).toBeInTheDocument();
    await user.click(screen.getByText('Refresh'));
    expect(store.getState().user.cityList).toHaveLength(1);
  });
});
