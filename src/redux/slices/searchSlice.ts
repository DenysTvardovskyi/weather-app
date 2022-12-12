import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IFeature, ISearch } from 'application/intefaces/i-app';
import { IOption } from 'application/intefaces/i-option';

const OPTIONS_URL = import.meta.env.VITE_OPTIONS_URL;
const OPTIONS_API_KEY = import.meta.env.VITE_OPTIONS_API_KEY;

const initialState: ISearch = {
  criteria: '',
  options: [],
  status: 'idle',
  value: null,
};

export const fetchOptions = createAsyncThunk(
  'options/fetch',
  async (criteria: string) => {
    try {
      const response = await axios.get(
        'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
          `${criteria}.json?access_token=pk.eyJ1IjoidGRtZGVuIiwiYSI6ImNsYjg1bXhkejBnYWkzcGxrcm03eWQ1YWIifQ.2l4UJvJG6pg33e05Az6KmQ&cachebuster=1625641871908&autocomplete=true&types=place`,
      );
      const result = response.data.features.map((item: IFeature) => {
        return {
          label: item?.matching_place_name ?? item?.place_name,
          value: item?.center,
        };
      });
      return [...result];
    } catch (err) {
      return err;
    }
  },
);

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    setCriteria: (state, action) => {
      state.criteria = action.payload;
    },
    setOptions: (state, action) => {
      state.options = action.payload;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOptions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOptions.fulfilled, (state, action) => {
        state.status = 'success';
        state.options = action.payload as IOption[];
      });
  },
});

export const { setCriteria, setOptions, setValue } = searchSlice.actions;

export default searchSlice.reducer;
