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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
