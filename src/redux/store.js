import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slice/weatherSlice';
import africaWeatherReducer from './slice/africaWeatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    africaWeather: africaWeatherReducer,
  },
});

export default store;
