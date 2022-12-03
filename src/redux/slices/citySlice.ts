import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICity } from 'application/intefaces/i-app';
import { IOption } from 'application/intefaces/i-option';

const initialState: ICity = {
  cityList: [],
  status: 'idle',
};

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
});

export const { addCity, removeCity } = citySlice.actions;

export default citySlice.reducer;
