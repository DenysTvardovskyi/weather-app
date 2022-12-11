import store from '../../../src/redux/store';

describe('Redux initial state tests', () => {
  it('Should initially set search state to clean object', () => {
    const mockState = {
      criteria: '',
      options: [],
      status: 'idle',
      value: null,
    };
    const state = store.getState().search;
    expect(state).toEqual(mockState);
  });

  it('Should initially set user state to clean object if no localstorage data', () => {
    const cities = JSON.parse(localStorage.getItem('cityList') ?? '[]');

    const mockState = {
      cityList: cities,
      status: 'idle',
    };
    const state = store.getState().user;
    expect(state).toEqual(mockState);
  });

  it('Should initially set city state to clean object', () => {
    const mockState = {
      city: null,
      cityWeather: [],
      coordinates: null,
      weatherByDay: [],
      status: 'idle',
    };
    const state = store.getState().city;
    expect(state).toEqual(mockState);
  });
});
