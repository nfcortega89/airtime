import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'
import GoogleMap from '../components/google_map'
import { areas } from '../../coordinates'

class WeatherList extends Component {
  componentWillMount() {
    // areas.forEach((city) => {
    //   console.log(city.name)
    // })
    this.props.fetchWeather()
  }
  renderWeather(locations) {
    return locations.map(({ data }, index) => {
      return (
        <tr>
          <td className="name">{areas[index].name}</td>
          <td><GoogleMap lat={data.coord.lat} lon={data.coord.lon}/></td>
          <td className="temp">{Math.floor(data.main.temp)}&deg; </td>
          <td className="precipitation">{data.main.humidity}</td>
          <td className="wind">{convertToKnots(data.wind.speed)}</td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div className="main">
        <div className="list-container">
         <ul>
         </ul>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Location</th>
              <th>Map</th>
              <th>Temperature (f)</th>
              <th>Precipitation (%)</th>
              <th>Wind (kts)</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>

    )
  }
}

const convertToKnots = function(meters) {
  return Math.floor(meters * 1.94384)
}

function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList)
