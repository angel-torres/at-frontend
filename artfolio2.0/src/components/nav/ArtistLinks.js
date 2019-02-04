import React, { Component } from 'react';

export default class ArtistLinks extends Component {
  render() {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Create Post</a></li>
            <li><a href="badges.html">Sign Out</a></li>
        </ul>
    )
  }
}
