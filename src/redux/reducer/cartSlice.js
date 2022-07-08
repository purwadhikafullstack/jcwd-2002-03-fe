/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cart: (state, action) => {
      state = action.payload;
    },
  },
});

export const { cart } = cartSlice.actions;
export const selectCart = (state) => state.cart;
export default cartSlice.reducer;
