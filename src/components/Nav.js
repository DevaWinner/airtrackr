import React from 'react';
import PropTypes from 'prop-types';
import continents from './Assets/continents.png';
import CityFilter from './City/CityFilter';

const Nav = ({ onFilterChange }) => (
  <header>
    <nav className="navbar flex">
      <h1>AirVibe</h1>
      <CityFilter onFilterChange={onFilterChange} />
    </nav>
    <div className="map-header flex">
      <div className="map">
        <img src={continents} alt="Asia Map" />
      </div>
      <h2>Air Quality in Global Cities</h2>
    </div>
  </header>
);

Nav.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Nav;
