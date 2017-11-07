import React, { Component } from "react";
import { Link } from "react-router";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Time to fly drones!</h1>
        <ul>
          <li>With Airtime you can find legal flyzones 3x faster.</li>
          <li>
            Airtime offers real time weather updates. Allowing users to select
            ideal venue for lift-off!
          </li>
          <li>
            Airtime provides Google Maps of flyzone areas as well as satellite
            images of the terrains.
          </li>
        </ul>
        <h3>Select City</h3>
        <ul>
          <li>
            <Link to="/san-diego">San Diego</Link>
          </li>
          <li>
            <Link to="/los-angeles">Los Angeles</Link>
          </li>
          <li>
            <Link to="/san-francisco">San Francisco</Link>
          </li>
        </ul>
      </div>
    );
  }
}
