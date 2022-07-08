import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartInput: "",
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cart: (state, action) => {
      state.cartInput = action.payload;
    },
  },
});

export const { cart } = cartReducer.actions;

export default cartReducer.reducer;
