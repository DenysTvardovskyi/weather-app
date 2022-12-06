import { createSlice } from '@reduxjs/toolkit';
import { ICityListEl, IUser } from 'application/intefaces/i-app';
import { fetchWeather } from 'slices/citySlice';

const cities =
  localStorage.getItem('cityList') !== null
    ? JSON.parse(localStorage.getItem('cityList') ?? '[]')
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
        (city: ICityListEl) => city.city.name !== action.payload,
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
            weather: action.payload.list[0],
          });
        }

        window.localStorage.setItem('cityList', JSON.stringify(state.cityList));
      });
  },
});

export const { removeCity } = userSlice.actions;

export default userSlice.reducer;
