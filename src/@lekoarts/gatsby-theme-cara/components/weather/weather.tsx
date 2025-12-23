import React from 'react';
import WeatherInCurrentCity from './currentCity';

export default function Weather() {
  return (
    <div className="weather-app">
      <WeatherInCurrentCity />

      <div className="weather-div"></div>
    </div>
  );
}
