import { configureStore } from "@reduxjs/toolkit";
import authAdminReducer from "./reducer/authAdminSlice";
import authReducer from "./reducer/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminAuth: authAdminReducer
  },
});

export default store

