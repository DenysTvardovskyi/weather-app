import { configureStore } from '@reduxjs/toolkit';
import citySliceReducer from './slices/citySlice';
import searchSliceReducer from './slices/searchSlice';

const store = configureStore({
  reducer: {
    city: citySliceReducer,
    search: searchSliceReducer,
  },
});

export default store;
