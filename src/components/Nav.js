import React from 'react';
import PropTypes from 'prop-types';
import Africa from '../assets/africa.png';
import CityFilter from './City/CityFilter';
import './styles/Nav.css';

const Nav = ({ onFilterChange }) => (
  <header>
    <nav className="flex">
      <h1>AirTrakr</h1>
      <CityFilter onFilterChange={onFilterChange} />
    </nav>
    <div className="headline flex">
      <div className="africa">
        <img src={Africa} alt="Map of Africa" />
      </div>
      <h2>Air Quality in African Cities</h2>
    </div>
  </header>
);

Nav.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Nav;
