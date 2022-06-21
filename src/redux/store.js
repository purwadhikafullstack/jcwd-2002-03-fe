import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
