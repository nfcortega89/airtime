import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LandingPage extends Component {
  render () {
    return (
      <div className="jumbotron">
        <h1>Time to fly drones!</h1>
        <p>This MVP application provides drone users with a lists of flyzones along with current weather conditions.</p>
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

    )
  }

}
