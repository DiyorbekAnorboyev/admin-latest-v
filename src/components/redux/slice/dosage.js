import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  dosageData: [],
};

const dosageSlice = createSlice({
  name: "dosage",
  initialState,
  reducers: {
    getDosageStart: (state) => {
      state.isLoading = true;
    },
    getDosageSuccess: (state, action) => {
      state.isLoading = false;
      state.dosageData = action.payload;
    },
    getDosageFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getDosageStart, getDosageSuccess, getDosageFailure } =
  dosageSlice.actions;

export default dosageSlice.reducer;
