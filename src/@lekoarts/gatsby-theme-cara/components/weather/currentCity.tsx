import React, { useState } from 'react';
import { getLocation, IS_GEOLOCATION_SUPPORTED } from './getLocation';
import { queryWeatherData } from './queryWeatherData';
import RenderWeatherData from './render';
import { WeatherData } from './types';

export default function WeatherInCurrentCity() {
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [error, setError] = useState<string>();

  function getWeatherForCurrentCity() {
    setLoading(true);
    getLocation()
      .then((coords) => queryWeatherData(coords.latitude, coords.longitude))
      .then(setWeatherData)
      .catch((error) => {
        if (error.code === 1) {
          setError('Location request was denied in your browser.');
        } else {
          setError("We couldn't determine your location.");
        }
      })
      .finally(() => setLoading(false));
  }

  if (!IS_GEOLOCATION_SUPPORTED) {
    return null;
  }

  if (loading) {
    return (
      <div className="weather-div">
        <h4>...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-div">
        <h4>{error}</h4>
        <button onClick={getWeatherForCurrentCity}>Try again</button>
      </div>
    );
  }

  if (weatherData) {
    return (
      <div className="weather-div">
        <RenderWeatherData data={weatherData} />
      </div>
    );
  }

  return (
    <div className="weather-div">
      <h4>In my city?</h4>
      <button onClick={getWeatherForCurrentCity}>Find out</button>
    </div>
  );
}
