import React, { Component } from 'react'
import { connect } from 'react-redux';

import { createAccount } from '../../actions';


class CreateAccount extends Component {
    state = {
        firstName: '',  
        lastName: '',
        id: Date.now(),
        password: '', // optional up to yall
        email: '' // also optional.
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    createAccount = e => {
        e.preventDefault();
        this.props.history.push("/user/0")
        this.props.createAccount(this.state);
    }

    render() {
        return (
            <div className="create-account-card">
                <form onSubmit={this.createAccount} className="col s12">
                    <div className="row">
                        <label className="create-title">First Name</label>
                        <div className="input-field col s6">
                        <input onChange={this.handleChanges} value={this.state.firstName} name="firstName" type="text" className="validate-create"/>
                        </div>

                        <label className="create-title">Last Name</label>
                        <div className="input-field col s6">
                        <input onChange={this.handleChanges} value={this.state.lastName} name="lastName" type="text" className="validate-create"/>
                        </div>
                    </div>

                    <div className="row">
                        <label className="create-title">Email</label>
                        <div className="input-field col s12">
                        <input onChange={this.handleChanges} value={this.state.email} name="email" type="email" className="validate-create"/>
                        </div>
                    </div>

                    <div className="row">
                        <label className="create-title">Password</label>
                        <div className="input-field col s12">
                        <input onChange={this.handleChanges} value={this.state.password} name="password" type="password" className="validate-create"/>
                        </div>
                    </div>
                    <button class="create-account-btn">Create Account</button>
                </form>
        </div>
        )
    }
}

export default connect(null, { createAccount })(CreateAccount)
