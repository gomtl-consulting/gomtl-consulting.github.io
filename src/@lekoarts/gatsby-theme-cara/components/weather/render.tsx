import React, { useState } from 'react';
import { WeatherData } from './types';

export default function RenderWeatherData({ data }: { data: WeatherData }) {
  const [units, setUnits] = useState<string>('celsius');

  const temp = units === 'celsius' ? data.celsius : data.fahrenheit;

  return (
    <div className="weather-render">
      <span className="weather-icon">(icon)</span>
      <span className="temp-number">{Math.round(temp)}°</span>
      <button className="temp-selector">
        <span className={units === 'celsius' ? 'selected' : ''}>°C</span>
        <span className={units === 'fahrenheit' ? 'selected' : ''}>°F</span>
      </button>
    </div>
  );
}
