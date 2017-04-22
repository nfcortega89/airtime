import axios from 'axios';
import { areas } from '../../coordinates';
const API_KEY = '4195135e9c7034878d78c6f4d7f1f88d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return (dispatch) => {
    const promises = areas.map(({lat, lon, name}) => {
      const url = `${ROOT_URL}&lat=${lat}&lon=${lon}&units=imperial`;
      return axios.get(url);
    })

    Promise.all(promises)
      .then((list) => {
        dispatch(resolveWeather(list))
      })
  }
}

export function resolveWeather(list) {
  return {
    type: FETCH_WEATHER,
    payload: list
  }
}
