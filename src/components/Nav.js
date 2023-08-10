import React from 'react';
import PropTypes from 'prop-types';
import CityFilter from './City/CityFilter';
import './styles/Nav.css';

const Nav = ({ onFilterChange }) => (
  <header>
    <nav className="flex">
      <h1>AirTrakr</h1>
      <CityFilter onFilterChange={onFilterChange} />
    </nav>
  </header>
);

Nav.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Nav;
