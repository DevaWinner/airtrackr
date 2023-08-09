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

  const statusClassName = weatherStatus.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="detail flex">
      <h2>{city}</h2>
      <div className="quality">
        <p className="quality">Air Quality:</p>
        <p className={statusClassName}>{weatherStatus}</p>
      </div>
      <div className="index">
        <p className="quality-index-header">Air Quality Index(AQI):</p>
        <p className={statusClassName}>{aqi}</p>
      </div>
    </div>
  );
}

CityWeather.propTypes = {
  city: PropTypes.string.isRequired,
  aqi: PropTypes.number.isRequired,
};

export default CityWeather;
