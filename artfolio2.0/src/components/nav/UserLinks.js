import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserLinks extends Component {
  render() {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Sign Out</ Link></li>
        </ul>
    )
  }
}
