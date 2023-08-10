import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { getCityData, getAirPollutionData } from '../../components/Api/api';

const initialState = {
  cityList: ['Africa'],
  dataOfCities: [],
  isDataFetched: false,
};

const fetchAfricaWeatherData = createAsyncThunk(
  'weather/fetchAfricaWeatherData',
  async (_, { getState }) => {
    const { cityList } = getState().africaWeather;
    const dataWeatherWithCities = await Promise.all(
      cityList.map(async (city) => {
        const cityData = await getCityData(city);
        if (cityData.length > 0) {
          const { lat, lon } = cityData[0];
          const weatherData = await getAirPollutionData(lat, lon);
          return {
            id: uuidv4(),
            city,
            lat,
            lon,
            data: weatherData.list[0],
          };
        }
        return {};
      }),
    );
    return dataWeatherWithCities;
  },
);

const africaWeatherSlice = createSlice({
  name: 'africaWeather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAfricaWeatherData.fulfilled, (state, action) => {
      state.dataOfCities = action.payload;
      state.isDataFetched = true;
    });
  },
});

export default africaWeatherSlice.reducer;
export { fetchAfricaWeatherData };
