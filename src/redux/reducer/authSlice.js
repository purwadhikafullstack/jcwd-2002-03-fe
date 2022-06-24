/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  name: "",
  email: "",
  image_url: "",
  is_verified: "",
  phone: "",
  role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin: (state, action) => {
      state.id = action.payload.id
      state.name = action.payload.name
      state.email = action.payload.email
      state.image_url = action.payload.image_url
      state.is_verified = action.payload.is_verified
      state.phone = action.payload.phone
      state.role = action.payload.role
    },
    logout: (state) => {
      state.id = initialState.id
      state.name = initialState.name
      state.email = initialState.email
      state.image_url = initialState.image_url
      state.is_verified = initialState.is_verified
      state.phone = initialState.phone
      state.role = initialState.role
    },
  },
});

export const { signin, logout } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
