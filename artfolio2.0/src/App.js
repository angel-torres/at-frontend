import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Nav from './components/nav/Nav'
import SignIn from './components/auth/SignIn';
import CreateAccount from './components/auth/CreateAccount';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route path="/signin" component={SignIn}/>
        <Route path="/createaccount" component={CreateAccount}/>
      </div>
    );
  }
}

export default App;
