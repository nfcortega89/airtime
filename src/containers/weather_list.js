import React, { Component } from "react";
import { connect } from "react-redux-dom";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";
import GoogleMap from "../components/google_map";
import { areas } from "../../coordinates";

class WeatherList extends Component {
  componentWillMount() {
    this.props.fetchWeather();
  }
  renderWeather(rawLocations) {
    const locations = rawLocations.map((location, index) => {
      location.data["index"] = index;
      return location;
    });
    locations.sort(function(a, b) {
      return a.data.wind.speed - b.data.wind.speed;
    });
    return locations.map(({ data }, index) => {
      return (
        <tr>
          <td className="name">
            <a
              target="_blank"
              href={`https://www.google.com/maps/place/${data.coord.lat},${data
                .coord.lon}`}>
              {areas[data.index].name}
            </a>
          </td>
          <td>
            <GoogleMap lat={data.coord.lat} lon={data.coord.lon} />
          </td>
          <td className="temp">{Math.floor(data.main.temp)}&deg; </td>
          <td className="precipitation">{data.main.humidity}</td>
          <td className="wind">{convertToKnots(data.wind.speed)}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="main">
        <div className="list-container">
          <ul />
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
    );
  }
}

const convertToKnots = function(meters) {
  return Math.floor(meters * 1.94384);
};

function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
