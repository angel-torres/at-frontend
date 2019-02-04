import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Nav from './components/nav/Nav'
import SignIn from './components/auth/SignIn';
import CreateAccount from './components/auth/CreateAccount';
import Posts from './components/posts/Posts';
import CreatePost from './components/artist/CreatePost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route path="/signin" component={SignIn}/>
        <Route path="/createaccount" component={CreateAccount}/>
        <Route path="/user/:id" component={Posts}/>
        <Route path="/createpost" component={CreatePost}/>
      </div>
    );
  }
}

export default App;
