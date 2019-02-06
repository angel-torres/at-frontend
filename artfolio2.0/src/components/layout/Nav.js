import React, { Component } from 'react'
import SignedOutLinks from './SignedOutLinks';
import UserLinks from './UserLinks';
import { connect } from "react-redux";
import {  Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
         <nav>
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo">ARTFOLIO 2.0</Link>
            {this.props.signedIn ? <UserLinks artist={this.props.artist} /> : <SignedOutLinks />}
            </div>
        </nav>
    )
  }
}

const mapStateToProps = state => (
    {
        signedIn: state.signedIn,
        artist: state.artist
    }
)

export default connect(mapStateToProps, {})(Nav)