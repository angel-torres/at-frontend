import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ArtistLinks extends Component {
  render() {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/createpost">Create Post</ Link></li>
            <li><Link to="/">Sign Out</ Link></li>
        </ul>
    )
  }
}
