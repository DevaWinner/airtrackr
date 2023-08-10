import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAfricaWeatherData } from '../redux/slice/africaWeatherSlice';
import CityWeather from './City/CityWeather';
import Africa from '../assets/africa.png';
import './styles/AfricaWeather.css';

const AfricaWeather = () => {
  const [filteredCities, setFilteredCities] = useState([]);
  const cityData = useSelector((state) => state.africaWeather.dataOfCities);
  const isDataFetched = useSelector((state) => state.africaWeather.isDataFetched);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataFetched) {
      dispatch(fetchAfricaWeatherData());
    }
  }, [dispatch, isDataFetched]);

  useEffect(() => {
    setFilteredCities(cityData);
  }, [cityData]);

  return (
    <div className="headline flex">
      <div className="africa">
        <img src={Africa} alt="Map of Africa" />
      </div>
      <>
        {filteredCities.map((city) => (
          <div className="headline-city" to={`city/${city.id}`} key={city.id}>
            <CityWeather city={city.city} aqi={city.data.main.aqi} />
          </div>
        ))}
      </>
    </div>
  );
};

export default AfricaWeather;
