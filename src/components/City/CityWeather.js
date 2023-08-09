import PropTypes from 'prop-types';

function CityWeather({ city, aqi }) {
  let weatherStatus = '';

  switch (aqi) {
    case 1:
      weatherStatus = 'Excellent';
      break;
    case 2:
      weatherStatus = 'Great';
      break;
    case 3:
      weatherStatus = 'Good';
      break;
    case 4:
      weatherStatus = 'Fair';
      break;
    case 5:
      weatherStatus = 'Poor';
      break;
    default:
      weatherStatus = 'Unknown';
  }

  const statusClassName = weatherStatus.toLowerCase().replace(' ', '-');

  return (
    <div className="city-weather flex">
      <h2>{city}</h2>
      <div className="air-quality">
        <span className="quality">Quality of air:</span>
        <span className={statusClassName}>{weatherStatus}</span>
      </div>
      <div className="quality-index">
        <span className="quality-index-header">Quality index:</span>
        <span className={statusClassName}>{aqi}</span>
      </div>
    </div>
  );
}

CityWeather.propTypes = {
  city: PropTypes.string.isRequired,
  aqi: PropTypes.number.isRequired,
};

export default CityWeather;
