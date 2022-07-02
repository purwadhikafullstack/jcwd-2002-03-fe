import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authSlice";
import profileReducer from "./reducer/profileSlice";
import searchReducer from "./reducer/search";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    search: searchReducer
  },
});

export default store

