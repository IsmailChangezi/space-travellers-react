import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './rocket/rocketSlice';
import missionSlice from './missions/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
    missions: missionSlice,
  },
});

export default store;
