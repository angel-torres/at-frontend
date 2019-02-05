import React, { Component } from 'react'
import { connect } from 'react-redux'

import Post from './Post';

class Posts extends Component {
  render() {
      console.log(this.props)
    return (
      <div className="container">
        <h2>Hello {this.props.user.firstName}</h2>
        {
            this.props.posts.map( post => (<Post post={post} />))
        }
      </div>
    )
  }
}

const mapPropsToState = state => {
    return {
        posts: state.posts,
        user: state.user
    }
}

export default connect(mapPropsToState, {})(Posts)
