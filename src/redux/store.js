import { configureStore } from "@reduxjs/toolkit";
import rocketSlice from "./rocket/rocketSlice";

export const store = configureStore({
  reducer: rocketSlice,
});
