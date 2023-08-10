import React from 'react';
import PropTypes from 'prop-types';

function CityFilter({ onFilterChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Enter city..."
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
}

CityFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default CityFilter;
