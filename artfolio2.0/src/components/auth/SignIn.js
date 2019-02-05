import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions'

class SignIn extends Component {

  signIn = e => {
    this.props.history.push("/user/0")
    e.preventDefault();
    this.props.signIn()
  }

  render() {
    return (
      <form onSubmit={this.signIn} className="container card" style={{margin:"40px auto", padding:"60px"}}>
        <div className="row">
            <div className="input-field col s12">
            <input id="password" type="password" className="validate"/>
            <label>Password</label>
            </div>
        </div>
        <div className="row">
              <div className="input-field col s12">
              <input id="email" type="email" className="validate"/>
              <label>Email</label>
              </div>
          </div>
          <button class="waves-effect waves-light btn #00695c teal darken-3">Sign In</button>
      </form>
    )
  }
}

export default connect(null, { signIn })(SignIn)