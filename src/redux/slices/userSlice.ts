import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { ICityListEl, IUser } from 'application/intefaces/i-app';
import { fetchWeather } from './citySlice';
import { IWeatherResponse } from '../../application/intefaces/i-weather';

const cities = JSON.parse(localStorage.getItem('cityList') ?? '[]');

const initialState: IUser = {
  cityList: cities,
  status: 'idle',
};

const checkIfCityExists = (
  state: Draft<IUser>,
  action: PayloadAction<IWeatherResponse>,
) => state.cityList.find((city) => city.city.name === action.payload.city.name);

const handleDuplicatedCity = (
  state: Draft<IUser>,
  action: PayloadAction<IWeatherResponse>,
) => {
  if (checkIfCityExists(state, action)) {
    const Index = state.cityList.findIndex(
      (city) => city.city.name === action.payload.city.name,
    );
    state.cityList[Index] = {
      city: action.payload.city,
      weather: action.payload.list[0],
    };
  } else {
    state.cityList.push({
      city: action.payload.city,
      weather: action.payload.list?.[0],
    });
  }

  window.localStorage.setItem('cityList', JSON.stringify(state.cityList));
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    removeCity: (state, action) => {
      state.cityList = state.cityList.filter(
        (city: ICityListEl) => city.city.name !== action.payload,
      );
      window.localStorage.setItem('cityList', JSON.stringify(state.cityList));
    },
    addCity: (state, action) => {
      handleDuplicatedCity(state, action);
    },
    setCityList: (state, action) => {
      state.cityList = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        handleDuplicatedCity(state, action);
      });
  },
});

export const { removeCity, addCity, setCityList } = userSlice.actions;

export default userSlice.reducer;
