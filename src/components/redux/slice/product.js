import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsStart: (state) => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    getProductsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getProductsStart, getProductsSuccess, getProductsFailure } =
  productSlice.actions;

export default productSlice.reducer;
