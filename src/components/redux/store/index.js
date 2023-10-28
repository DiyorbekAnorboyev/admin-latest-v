import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../slice/product";
import CategoryReducer from "../slice/category";
import DosageReducer from "../slice/dosage";

const store = configureStore({
  reducer: {
    product: ProductReducer,
    category: CategoryReducer,
    dosage: DosageReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
