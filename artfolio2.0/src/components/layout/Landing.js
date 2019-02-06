import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Landing extends Component {


  render() {
    if (this.props.token) {
      this.props.history.push(`/user/${this.props.username}`);
    }
    return (
      <div className="container card" style={{margin:"40px auto", padding:"60px"}}>
        <h1>Welcome!</h1>
        <p>Show your art to the world!</p>
        <Link to="/signin" ><button className="waves-effect waves-light btn #00695c teal darken-3">Sign In</button></Link>
        <Link to="/createaccount" ><button className="waves-effect waves-light btn #00695c teal darken-3">Create Account</button></Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    token: state.token
  }
}

export default connect( mapStateToProps, {} )(Landing)