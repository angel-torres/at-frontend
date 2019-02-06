import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updating } from '../../actions'
import Post from './Post';

class Posts extends Component {

  update = (e, formId) => {
    e.preventDefault();
    this.props.history.push('/updatepost');
    this.props.updating(formId);
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <h2>Hello {this.props.user.fullName}</h2>
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
        user: state.user
    }
}

export default connect(mapPropsToState, { updating })(Posts)
