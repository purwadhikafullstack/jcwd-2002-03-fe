import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInput: "",
};

const searchReducer = createSlice({
  name: "search",
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { search } = searchReducer.actions;

export default searchReducer.reducer;
