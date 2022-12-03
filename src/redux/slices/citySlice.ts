import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICity, IFeature } from 'application/intefaces/i-app';
import { Coordinate, IOption } from 'application/intefaces/i-option';
import axios from 'axios';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/';
const WEATHER_API_KEY = 'a8efff59c2b5c3436b8724b3620fe537';

const initialState: ICity = {
  cityList: [],
  cityWeather: [],
  status: 'idle',
};

export const fetchWeather = createAsyncThunk(
  'weather/fetch',
  async (coordinates: Coordinate) => {
    try {
      const response = await axios.get(
        WEATHER_URL +
          `forecast?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${WEATHER_API_KEY}`,
      );
      return [response.data];
    } catch (err: any) {
      return err.message;
    }
  },
);

export const citySlice = createSlice({
  name: 'citySlice',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<IOption | null>) => {
      action.payload ? state.cityList.push(action.payload) : null;
    },
    removeCity: (state, action) => {
      state.cityList = state.cityList.filter(
        (city: IOption) => city !== action.payload,
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'success';
        state.cityWeather = [...action.payload];
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addCity, removeCity } = citySlice.actions;

export default citySlice.reducer;
