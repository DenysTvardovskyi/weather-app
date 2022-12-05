import { configureStore } from '@reduxjs/toolkit';
import citySliceReducer from './slices/citySlice';
import searchSliceReducer from './slices/searchSlice';
import userSliceReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    city: citySliceReducer,
    search: searchSliceReducer,
    user: userSliceReducer,
  },
});

export default store;
