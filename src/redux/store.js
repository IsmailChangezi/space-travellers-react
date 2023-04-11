import { configureStore } from "@reduxjs/toolkit";
import rocketSlice from "./rocket/rocketSlice";
import missionSlice from "./missions/missionSlice";

export const store = configureStore({
  reducer: {
    rockets: rocketSlice,
    missions: missionSlice,
  },
});
