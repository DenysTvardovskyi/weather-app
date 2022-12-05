import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICity, IUser } from 'application/intefaces/i-app';
import { IOption } from 'application/intefaces/i-option';
import { fetchWeather } from 'slices/citySlice';

const cities =
  localStorage.getItem('cityList') !== null
    ? JSON.parse(localStorage.getItem('cityList'))
    : [];

const initialState: IUser = {
  cityList: cities,
  status: 'idle',
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    removeCity: (state, action) => {
      state.cityList = state.cityList.filter(
        (city: any) => city.city.name !== action.payload,
      );
      window.localStorage.setItem('cityList', JSON.stringify(state.cityList));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        if (
          state.cityList.find(
            (city) => city.city.name === action.payload.city.name,
          )
        ) {
          state.cityList = state.cityList.filter(
            (city: any) => city.city.name !== action.payload.city.name,
          );
        }
        state.cityList.push({
          city: action.payload.city,
          weather: action.payload.list[0],
        });
        window.localStorage.setItem('cityList', JSON.stringify(state.cityList));
      });
  },
});

export const { removeCity } = userSlice.actions;

export default userSlice.reducer;
