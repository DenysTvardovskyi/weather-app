import { BrowserRouter } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import * as React from 'react';
import SideBar from '../../../../src/views/shared/side-bar';
import store from '../../../../src/redux/store';
import { Provider } from 'react-redux';
import { addCity } from '../../../../src/redux/slices/userSlice';

describe('side bar component', () => {
  const wrapper = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
  );
  const MockRouter = () => {
    return (
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    );
  };

  const mockCity = {
    city: {
      name: 'Lviv',
      coord: {
        lat: 0,
        lon: 2,
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

  it('renders correctly', () => {
    render(<MockRouter />, { wrapper });
    expect(screen.getByText('City List')).toBeInTheDocument();
    expect(store.getState().user.cityList).toHaveLength(0);
    expect(screen.getByText('No city selected yet')).toBeInTheDocument();
    act(() => {
      store.dispatch(addCity(mockCity));
      store.dispatch(addCity(mockCity));
    });
    expect(store.getState().user.cityList).toHaveLength(1);
    expect(screen.getAllByTestId('weather-card')).toHaveLength(1);
  });
});
