import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions'

class SignIn extends Component {

  state = {
    email: '',
    password: '',
  }

  signIn = e => {
    e.preventDefault();
    this.props.history.push("/user/0")
    this.props.signIn(this.state);
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.signIn} className="sign-in-card">
        <div className="row">
              <label className="signin-text">Email</label>
              <div className="input-field col s12">
              <input onChange={this.handleChanges} value={this.state.email} name="email" type="email" className="validate"/>
              </div>
          </div>
          <div className="row">
            <label className="signin-text">Password</label>
            <div className="input-field col s12">
            <input onChange={this.handleChanges} value={this.state.password} name="password" type="password" className="validate"/>
            </div>
        </div>
          <button className="card-btn-signin">Sign In</button>
      </form>
    )
  }
}

export default connect(null, { signIn })(SignIn)