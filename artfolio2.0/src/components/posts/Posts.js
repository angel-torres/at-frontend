import React, { Component } from 'react'
import Post from './Post';

export default class Posts extends Component {
  render() {
    return (
      <div className="container">
        <Post/>
        <Post/>
        <Post/>
      </div>
    )
  }
}
