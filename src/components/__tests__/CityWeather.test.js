import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CityWeather from '../City/CityWeather';

describe('CityWeather', () => {
  it('renders the city name and AQI status', () => {
    const { getByText } = render(<CityWeather city="New York" aqi={3} />);
    expect(getByText('New York')).toBeInTheDocument();
    expect(getByText('Good')).toBeInTheDocument();
  });

  it('renders the AQI value', () => {
    const { getByText } = render(<CityWeather city="Los Angeles" aqi={5} />);
    expect(getByText('Air Quality Index(AQI):')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
  });

  it('renders the correct status class name', () => {
    const { getByText } = render(<CityWeather city="Chicago" aqi={2} />);
    expect(getByText('Great')).toHaveClass('great');
  });

  it('should render Cities component', () => {
    const city = 'Cairo';
    const aqi = 1;
    render(<CityWeather city={city} aqi={aqi} />);
    expect(CityWeather).toMatchSnapshot();
  });

  it('should render Cities component', () => {
    const city = 'Cairo';
    const aqi = 1;
    render(<CityWeather city={city} aqi={aqi} />);
    expect(CityWeather).toMatchSnapshot();
  });
});
