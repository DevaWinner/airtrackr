import React from 'react';
import PropTypes from 'prop-types';
import CityFilter from './City/CityFilter';
import './styles/Nav.css';

const Nav = ({ onFilterChange }) => (
  <header>
    <nav className="flex">
      <h1>AirTrakr</h1>
      <div className="nav-icons flex">
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </div>
    </nav>
    <div className="filter flex">
      <CityFilter onFilterChange={onFilterChange} />
    </div>
  </header>
);

Nav.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Nav;
