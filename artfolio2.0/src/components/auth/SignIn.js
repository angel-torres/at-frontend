import React, { Component } from 'react'

export default class SignIn extends Component {
  render() {
    return (
      <form className="container">
        <div class="row">
            <div class="input-field col s12">
            <input id="password" type="password" class="validate"/>
            <label for="password">Password</label>
            </div>
        </div>
        <div class="row">
              <div class="input-field col s12">
              <input id="email" type="email" class="validate"/>
              <label for="email">Email</label>
              </div>
          </div>
      </form>
    )
  }
}
