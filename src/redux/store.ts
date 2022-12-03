import { configureStore } from '@reduxjs/toolkit';
import citySliceReducer from './slices/citySlice';

const store = configureStore({
  reducer: {
    city: citySliceReducer,
  },
});

export default store;
