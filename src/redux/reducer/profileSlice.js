/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  name: "",
  email: "",
  image_url: "",
  birthdate: "",
  gender: "",
  phone: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
    editPicture: (state, action) => {
      state.image_url = action.payload;
    },
    editNama: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { editNama, getProfile, editPicture } = profileSlice.actions;
export const selectProfile = (state) => state.profile;
export default profileSlice.reducer;
