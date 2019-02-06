import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updating, getPosts } from '../../actions'
import Post from './Post';

class Posts extends Component {

  updating = (e, post) => {
    e.preventDefault();
    this.props.history.push('/updatepost');
    this.props.updating(post);
  }

  render() {
    if (this.props.signedIn === false) {
      this.props.history.push("/");
    }
    this.props.getPosts(this.props.user.id)
    return (
      <div className="container">
        <p>user: {this.props.user.username}</p>
        {
            this.props.posts.map( post => (<Post key={post.id} post={post} updating={this.updating} />))
        }
      </div>
    )
  }
}

const mapPropsToState = state => {
    return {
        posts: state.posts,
        user: state.user,
        signedIn: state.signedIn,
    }
}

export default connect(mapPropsToState, { updating, getPosts })(Posts)
