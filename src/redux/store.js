import { configureStore } from "@reduxjs/toolkit";
import authAdminSlice from "./reducer/authAdminSlice";
import authReducer from "./reducer/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminAuth: authAdminSlice
  },
});

export default store

