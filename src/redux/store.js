import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slice/weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;
