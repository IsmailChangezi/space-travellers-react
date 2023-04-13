import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './rocket/rocketSlice';
import missions from './missions/missions';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
    missionsReducer: missions,
  },
});

export default store;
