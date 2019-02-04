import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    return (
      <div>
        <div className="row">
            <div className="col s12">
                <div className="card large">
                    <div className="card-image">
                    <img src="https://loremflickr.com/320/240" />
                    <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <span>Edit</span>
                    </div>
                </div>
            </div>
        </div>        
      </div>
    )
  }
}
