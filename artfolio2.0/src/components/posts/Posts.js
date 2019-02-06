import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updating, getPosts } from '../../actions'
import Post from './Post';

class Posts extends Component {

  update = (e, formId) => {
    e.preventDefault();
    this.props.history.push('/updatepost');
    this.props.updating(formId);
  }

  componentDidMount() {
    this.props.getPosts(this.props.user.id)
  }

  render() {
    if (this.props.signedIn === false) {
      this.props.history.push("/");
    }
    return (
      <div className="container">
        <p>user: {this.props.user.username}</p>
        {
            this.props.posts.map( post => (<Post key={post.id} post={post} update={this.update} />))
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

export default connect(mapPropsToState, { updating, getPosts })(Posts)
