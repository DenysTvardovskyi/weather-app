import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICity } from 'application/intefaces/i-app';
import { Coordinate } from 'application/intefaces/i-option';

const WEATHER_URL = import.meta.env.VITE_WEATHER_URL;
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const initialState: ICity = {
  city: null,
  cityWeather: [],
  coordinates: null,
  weatherByDay: [],
  status: 'idle',
};

export const fetchWeather = createAsyncThunk(
  'weather/fetch',
  async (coordinates: Coordinate) => {
    try {
      const response = await axios.get(
        WEATHER_URL +
          `forecast?lon=${coordinates[0]}&lat=${coordinates[1]}&units=metric&appid=${WEATHER_API_KEY}`,
      );
      return response.data;
    } catch (err) {
      return err;
    }
  },
);

export const citySlice = createSlice({
  name: 'citySlice',
  initialState,
  reducers: {
    setCoordinates: (state, action) => {
      state.coordinates = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'success';
        state.city = action.payload.city;
        state.cityWeather = action.payload.list;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setCoordinates } = citySlice.actions;

export default citySlice.reducer;
