import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { getCityData, getAirPollutionData } from '../../components/Api/api';

const initialState = {
  cityList: [
    'Cairo',
    'Lagos',
    'Kinshasa',
    'Johannesburg',
    'Nairobi',
    'Addis Ababa',
    'Alexandria',
    'Casablanca',
    'Cape Town',
    'Durban',
    'Accra',
    'Algiers',
    'Khartoum',
    'Uyo',
    'Abuja',
    'Dakar',
  ],
  dataOfCities: [],
  isDataFetched: false,
};

const fetchCitiesWeatherData = createAsyncThunk(
  'weather/fetchCitiesWeatherData',
  async (_, { getState }) => {
    const { cityList } = getState().weather;
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

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCitiesWeatherData.fulfilled, (state, action) => {
      state.dataOfCities = action.payload;
      state.isDataFetched = true;
    });
  },
});

export default weatherSlice.reducer;
export { fetchCitiesWeatherData };
