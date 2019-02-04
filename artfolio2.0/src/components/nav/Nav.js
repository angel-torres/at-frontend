import React, { Component } from 'react'
import SignedOutLinks from './SignedOutLinks';
import UserLinks from './UserLinks';
import ArtistLinks from './ArtistLinks';

export default class Nav extends Component {
  render() {
    return (
         <nav>
            <div className="nav-wrapper #00695c teal darken-3">
            <a href="#" className="brand-logo left">ArtFolio2.0</a>
            <SignedOutLinks />
            <UserLinks />
            <ArtistLinks />
            </div>
        </nav>
    )
  }
}
