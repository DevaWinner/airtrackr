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
      <nav className="">
        <Link to="/">
          <i className="fa-solid fa-square-caret-left fa-xl" />
        </Link>
        <h2>{cityName}</h2>
      </nav>
      <header className="">
        <h2>Air Concentration</h2>
      </header>
      <section className="">Concentration in μg/m3</section>
      <section className="">
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
