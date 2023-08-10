import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import getCityAqiComponents from './airqualityindex/getCityAqiComponents';
import DataDisplay from './airqualityindex/DataDisplay';
import './styles/WeatherDetails.css';

const WeatherDetails = () => {
  const cityData = useSelector((state) => state.weather.dataOfCities);
  const { id } = useParams();

  const selectedCityData = cityData.find((city) => city.id === id);
  const cityName = selectedCityData?.city || '';

  const aqi = getCityAqiComponents(id, cityData);

  return (
    <div className="page-detail">
      <div className="detail-nav flex">
        <Link to="/">
          <i className="fa-solid fa-chevron-left fa-xl" />
        </Link>
        <h2>{cityName}</h2>
      </div>
      <header className="detail-header">
        <h2>Air Information</h2>
      </header>
      <section className="detail-head">Air Concentration in μg/m3</section>
      <section className="detail-list">
        {aqi.map((component) => (
          <DataDisplay
            key={component.dataname}
            name={component.dataname}
            value={component.data}
          />
        ))}
      </section>
    </div>
  );
};

export default WeatherDetails;
