import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignedOutLinks extends Component {
  render() {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/createaccount">Create Account</Link></li>
        </ul>
    )
  }
}
