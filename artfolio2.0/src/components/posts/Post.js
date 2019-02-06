import React, { Component } from 'react';

import { connect } from 'react-redux';


class Post extends Component {
  render() {
    return (
      <div>
        <div className="row">
            <div className="col s12">
                <div className="card large" style={{height:"700px"}}>
                    <div className="card-image">
                      <img alt="art" src="https://picsum.photos/200/300/?random" />
                      <span className="card-title">{this.props.post.title}</span>
                    </div>
                    <div className="card-content">
                      <span>By {this.props.post.author}</span>
                      <blockquote>{this.props.post.description}</blockquote>
                      <button onClick={e => this.props.update(e, this.props.post.id)} className="waves-effect waves-light btn #00695c teal darken-1">Update Post</button>
                      <button className="waves-effect waves-light btn #00695c teal darken-1"> <i className="material-icons">delete</i></button>
                    </div>
                </div>
            </div>
        </div>        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
} 

export default connect(mapStateToProps, {})(Post)