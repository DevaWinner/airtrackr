import React from 'react';
import PropTypes from 'prop-types';

const DataDisplay = ({ name, value }) => (
  <div className="data-component-wrap flex">
    <div className="data-component-name">
      <div dangerouslySetInnerHTML={{ __html: name }} />
    </div>
    <div className="data-component">
      {value}
    </div>
  </div>
);

DataDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default DataDisplay;
