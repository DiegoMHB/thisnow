import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSLice';
import mapReducer from '../features/mapSlice';
import postsReducer from '../features/postsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    map: mapReducer,
    posts: postsReducer,
  },
})