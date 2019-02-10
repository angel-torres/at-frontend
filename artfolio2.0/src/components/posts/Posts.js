import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updating, getPosts, deletePost } from '../../actions'
import Post from './Post';

class Posts extends Component {

  updating = (e, post) => {
    e.preventDefault();
    this.props.history.push('/updatepost');
    this.props.updating(post);
  }

  deletePost= (e, postId) => {
    e.preventDefault();
    this.props.deletePost(postId);
  }

  componentDidMount() {
    this.props.getPosts(this.props.user.id)
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
            this.props.posts.map( post => (<Post deletePost={this.deletePost} key={post.id} post={post} updating={this.updating} />))
        }
      </div>
    )
  }
}

const mapPropsToState = state => {
    return {
        posts: state.posts,
        user: state.user,
        signedIn: state.signedIn
    }
}

export default connect(mapPropsToState, { updating, getPosts, deletePost})(Posts)
