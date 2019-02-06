import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from '../../actions';
import { connect } from 'react-redux';

class UserLinks extends Component {

  signOut = e => {
    this.props.signOut();
  }

  render() {
    return (
        <ul id="nav-mobile" className="signed-in-nav">
            <li className="links"><Link to="/user/0">Dashboard</ Link></li>        
            <li className="links"><Link to="/createpost">Create Post</ Link></li>
            <li onClick={this.signOut} className="links"><Link to="/">Sign Out</ Link></li>
        </ul>
    )
  }
}

export default connect(null, { signOut })(UserLinks)
