import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    // create an embeded google map
    // this.refs.map is where map will be rendered to
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      },
      mapTypeId: 'satellite'
    })
  }
  render() {
    // this.refs.map
    return <div ref="map" />
  }
}

export default GoogleMap;
