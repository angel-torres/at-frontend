import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div className="container-card">
        <h1 className="welcome">Welcome!</h1>
        <p className="welcome-description">Show your art to the world!</p>
        <Link to="/signin" ><button className="card-btn">Sign In</button></Link>
        <Link to="/createaccount" ><button className="card-btn-2">Create Account</button></Link>
      </div>
    )
  }
}
