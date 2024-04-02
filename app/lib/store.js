import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../lib/features/todoSlice";

export const makeStore = () => {
  return configureStore({
    reducer: todoReducer,
  });
};
