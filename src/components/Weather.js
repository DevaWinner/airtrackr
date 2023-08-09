import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCitiesWeatherData } from '../redux/slice/weatherSlice';
import Nav from './Nav';
import CityWeather from './City/CityWeather';
import './styles/Weather.css';

const Weather = () => {
  const [filteredCities, setFilteredCities] = useState([]);
  const cityData = useSelector((state) => state.weather.dataOfCities);
  const isDataFetched = useSelector((state) => state.weather.isDataFetched);
  const dispatch = useDispatch();

  const handleFilterChange = (filterText) => {
    // eslint-disable-next-line max-len
    const filtered = cityData.filter((city) => city.city.toLowerCase().includes(filterText.toLowerCase()));
    setFilteredCities(filtered);
  };

  useEffect(() => {
    if (!isDataFetched) {
      dispatch(fetchCitiesWeatherData());
    }
  }, [dispatch, isDataFetched]);

  useEffect(() => {
    setFilteredCities(cityData);
  }, [cityData]);

  return (
    <>
      <Nav onFilterChange={handleFilterChange} />
      <div className="report-head">
        <p>City Reports</p>
      </div>
      <section className="main">
        {filteredCities.map((city) => (
          <Link className="city" to={`city/${city.id}`} key={city.id}>
            <CityWeather city={city.city} aqi={city.data.main.aqi} />
          </Link>
        ))}
      </section>
    </>
  );
};

export default Weather;
