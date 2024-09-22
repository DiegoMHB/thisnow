import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSLice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})