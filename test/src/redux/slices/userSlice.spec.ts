import store from '../../../../src/redux/store';
import { act } from '@testing-library/react';
import {
  addCity,
  removeCity,
  setCityList,
} from '../../../../src/redux/slices/userSlice';
import { localStorageMock, MockedCity } from '../../../utils/mockedData';

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('User redux state tests', () => {
  it('Initial state should be empty if no records in localstorage', () => {
    const cities = JSON.parse(localStorage.getItem('cityList') ?? '[]');
    expect(cities).toEqual([]);
    expect(store.getState().user).toEqual({
      cityList: [],
      status: 'idle',
    });
  });

  it('Initial state if records in localstorage', async () => {
    const mockedStorage = [
      {
        city: { name: 'Lviv' },
        weather: {},
      },
    ];
    await act(() => {
      localStorage.setItem('cityList', JSON.stringify(mockedStorage));
    });
    const cities = JSON.parse(localStorage.getItem('cityList') ?? '[]');
    await store.dispatch(setCityList(cities));
    expect(store.getState().user).toEqual({
      cityList: [
        {
          city: { name: 'Lviv' },
          weather: {},
        },
      ],
      status: 'idle',
    });
    expect(store.getState().user.cityList).toEqual(mockedStorage);
    await store.dispatch(removeCity('Lviv'));
  });

  it('Add/Remove city', () => {
    expect(store.getState().user.cityList).toEqual([]);

    act(() => {
      store.dispatch(addCity(MockedCity));
    });

    expect(store.getState().user.cityList).toHaveLength(1);

    act(() => {
      store.dispatch(addCity(MockedCity));
    });

    expect(store.getState().user.cityList).toHaveLength(1);

    act(() => {
      store.dispatch(removeCity('Lviv'));
    });

    expect(store.getState().user.cityList).toHaveLength(0);
  });
});
