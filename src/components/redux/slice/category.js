import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  categories: [],
};

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategoryStart: (state) => {
      state.isLoading = true;
    },
    getCategorySuccess: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    getCategoryFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getCategoryStart, getCategorySuccess, getCategoryFailure } =
  CategorySlice.actions;

export default CategorySlice.reducer;
