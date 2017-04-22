import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">AirTime</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/" className="navbar-brand">Home</Link></li>
          </ul>
        </nav>
        <h1 className="text-header">Flying conditions? Check with <span className="header-cta">AirTime.</span></h1>
      </div>
    )
  }
}
