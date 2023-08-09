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

  const aqi = getCityAqiComponents(id, cityData); // updated function call

  return (
    <article className="air-details">
      <nav className="air-details-nav flex">
        <Link to="/">
          <h1 className="back">&#60;</h1>
        </Link>
        <h2>{cityName}</h2>
      </nav>
      <header className="intro">
        <h2>Air Component Concentrations</h2>
      </header>
      <section className="conc-header">Concentration in μg/m3</section>
      <section className="conc-data">
        {aqi.map((component) => (
          <DataDisplay
            key={component.dataname}
            name={component.dataname}
            value={component.data}
          />
        ))}
      </section>
    </article>
  );
};

export default WeatherDetails;
