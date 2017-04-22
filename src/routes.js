import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LandingPage from './components/landing_page'
import App from './components/app';
import WeatherList from './containers/weather_list'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="/:city" component={WeatherList} />
  </Route>
)
