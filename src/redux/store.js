import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authSlice";
import profileReducer from "./reducer/profileSlice";
import searchReducer from "./reducer/search";
import cartReducer from "./reducer/cartSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});

export default store;
