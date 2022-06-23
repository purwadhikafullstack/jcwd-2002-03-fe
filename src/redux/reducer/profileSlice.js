import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ name: "" }, { gender: "" }];

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { editNama, getProfile } = profileSlice.actions;
export const selectProfile = (state) => state.profile;
export default profileSlice.reducer;
