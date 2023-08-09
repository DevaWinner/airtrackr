import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCitiesWeatherData } from '../redux/slice/weatherSlice';
import Nav from './Nav';
import CityWeather from './City/CityWeather';
import './styles/Weather.css';
import Africa from '../assets/africa.png';

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

      <div className="headline flex">
        <div className="africa">
          <img src={Africa} alt="Map of Africa" />
        </div>
        <>
          {filteredCities.length > 0 && (
          <div className="headline-city" to={`city/${filteredCities[0].id}`} key={filteredCities[0].id}>
            <CityWeather city={filteredCities[0].city} aqi={filteredCities[0].data.main.aqi} />
          </div>
          )}
        </>
      </div>

      <div className="report-head">
        <p>City Reports</p>
      </div>
      <section className="main">
        {filteredCities.slice(1).map((city) => (
          <Link className="city" to={`city/${city.id}`} key={city.id}>
            <CityWeather city={city.city} aqi={city.data.main.aqi} />
          </Link>
        ))}
      </section>

    </>
  );
};

export default Weather;
