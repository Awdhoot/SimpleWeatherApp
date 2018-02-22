import axios from 'axios';

const API_KEY = "b72bb7dbafe70a1c803d5d084e22d560";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;
// constants for action types
export const FETCH_WEATHER = 'FETCH_WEATHER';


//action creator to make AJAX call to fetch weather data, returns an action with a type and optional payload
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url, {});
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

