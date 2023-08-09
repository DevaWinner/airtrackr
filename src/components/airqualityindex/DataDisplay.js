import React from 'react';
import PropTypes from 'prop-types';

const DataDisplay = ({ name, value }) => (
  <div className="detail-data flex">
    <p className="data-name">
      <div dangerouslySetInnerHTML={{ __html: name }} />
    </p>
    <p className="data-value">
      {value}
    </p>
  </div>
);

DataDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default DataDisplay;
