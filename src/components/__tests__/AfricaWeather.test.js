import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import AfricaWeather from '../AfricaWeather';

describe('AfricaWeather', () => {
  test('renders the component', () => {
    render(
      <Provider store={store}>
        <AfricaWeather />
      </Provider>,
    );

    expect(screen.getByAltText('Map of Africa')).toBeInTheDocument();
  });
});
