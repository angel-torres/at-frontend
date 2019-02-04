import React, { Component } from 'react'

export default class CreateAccount extends Component {
  render() {
    return (
        <div className="row container">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                    <input id="first_name" type="text" className="validate"/>
                    <label>First Name</label>
                    </div>
                    <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate"/>
                    <label>Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="email" type="email" className="validate"/>
                    <label>Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="password" type="password" className="validate"/>
                    <label>Password</label>
                    </div>
                </div>
            </form>
      </div>
    )
  }
}
