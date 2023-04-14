import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missions from './missions/missions';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missionsReducer: missions,
    rockets: rocketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
