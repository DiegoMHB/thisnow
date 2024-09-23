import { configureStore } from '@reduxjs/toolkit';
import mapReducer from '../features/mapSlice';
import postsReducer from '../features/postsSlice';
import userReducer from '../features/userSlice'

export const store = configureStore({
  reducer: {
    map: mapReducer,
    posts: postsReducer,
    user: userReducer
  },
})