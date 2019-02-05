import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    return (
      <div>
        <div className="row">
            <div className="col s12">
                <div className="card large">
                    <div className="card-image">
                        <img src="https://picsum.photos/200/300/?random" />
                        <span className="card-title">{this.props.post.title}</span>
                        </div>
                        <div className="card-content">
                        <span>By {this.props.post.author}</span>
                        <blockquote>{this.props.post.description}</blockquote>
                        <span>Edit</span>
                    </div>
                </div>
            </div>
        </div>        
      </div>
    )
  }
}

// img: "https://via.placeholder.com/157",
// datePosted: Date.now(),
// title: "Hello",
// author: "Dr. Sig",
// description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mattis ipsum. Sed metus enim, tempus a orci ut, venenatis blandit dolor. Vivamus consequat, quam id varius pellentesque, erat nisi facilisis purus, a tincidunt justo tortor ut mi. Nunc mi nisl, laoreet id libero sed, aliquam eleifend mauris. Pellentesque vel justo at purus bibendum congue. Nullam sit amet mauris enim. Nam id augue cursus, egestas augue ac, rhoncus enim. Integer rutrum tempus velit vitae feugiat. Donec tristique dolor et magna cursus posuere.",
// id: 2,
