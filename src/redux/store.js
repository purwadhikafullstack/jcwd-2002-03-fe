import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authSlice";
import profileReducer from "./reducer/profileSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
  },
});

export default store

