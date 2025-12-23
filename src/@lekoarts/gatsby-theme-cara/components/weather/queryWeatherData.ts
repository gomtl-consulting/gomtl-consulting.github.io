import { OpenWeatherData, WeatherData } from './types';

/**
 * https://openweathermap.org/api/one-call-3
 */
const API_KEY = 'e4ea0376c53356fa949c715d958e42e6';
const EXCLUDE = ['minutely', 'hourly', 'daily', 'alerts'].join();
const ENDPOINT = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude=${EXCLUDE}&appid=${API_KEY}`;

export async function queryWeatherData(
  lat: number,
  lon: number
): Promise<WeatherData> {
  const apiResponse = await fetch(
    ENDPOINT.replace('{lat}', lat.toString()).replace('{lon}', lon.toString())
  );
  const apiData = (await apiResponse.json()) as OpenWeatherData;
  console.log('OpenWeather response', apiData);

  // Convert OpenWeather response into our own data object.
  return {
    // Convert Kelvin to Celsius:
    // https://www.rapidtables.com/convert/temperature/kelvin-to-celsius.html
    celsius: apiData.current.temp - 273.15,
    celsiusFeelsLike: apiData.current.feels_like - 273.15,
    // Convert Kelvin to Fahrenheit:
    // https://www.rapidtables.com/convert/temperature/kelvin-to-fahrenheit.html
    fahrenheit: (apiData.current.temp * 9) / 5 - 459.67,
    fahrenheitFeelsLike: (apiData.current.feels_like * 9) / 5 - 459.67,
    // Temperature is given by API in Kelvin.
    kelvin: apiData.current.temp,
    kelvinFeelsLike: apiData.current.feels_like,
  };
}
