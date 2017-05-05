import axios from 'axios';
import { areas } from '../../coordinates';
const ROOT_URL = `https://vast-cliffs-24756.herokuapp.com`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return (dispatch) => {
    const promises = areas.map(({lat, lon, name}) => {
      const url = `${ROOT_URL}?lat=${lat}&lon=${lon}`;
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
