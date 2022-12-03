import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cityList: ['Lviv', 'Odesa', 'Kyiv'],
  status: 'idle', // idle | loading | success | failed
  error: null,
};

export const citySlice = createSlice({
  name: 'citySlice',
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.cityList.push(action.payload);
    },
    removeCity: (state, action) => {
      state.cityList = state.cityList.filter((city) => city !== action.payload);
    },
  },
});

export const { addCity, removeCity } = citySlice.actions;

export default citySlice.reducer;
