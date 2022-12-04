import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICity } from 'application/intefaces/i-app';
import { Coordinate, IOption } from 'application/intefaces/i-option';
import axios from 'axios';
import useSortWeatherByDate from 'hooks/useSortWeatherByDate';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/';
const WEATHER_API_KEY = 'a8efff59c2b5c3436b8724b3620fe537';

const initialState: ICity = {
  cityList: [],
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
    setCoordinates: (state, action) => {
      state.coordinates = action.payload;
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
        state.city = action.payload.city;
        state.cityWeather = [...action.payload.list];
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addCity, removeCity, setCoordinates } = citySlice.actions;

export default citySlice.reducer;
