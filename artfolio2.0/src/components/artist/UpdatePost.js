import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updatePost } from '../../actions'

class UpdatePost extends Component {
    state = {
        img: "https://loremflickr.com/320/240",
        datePosted: Date.now(),
        title: "Hey",
        author: "Dr. Marsh",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mattis ipsum. Sed metus enim, tempus a orci ut, venenatis blandit dolor. Vivamus consequat, quam id varius pellentesque, erat nisi facilisis purus, a tincidunt justo tortor ut mi. Nunc mi nisl, laoreet id libero sed, aliquam eleifend mauris. Pellentesque vel justo at purus bibendum congue. Nullam sit amet mauris enim. Nam id augue cursus, egestas augue ac, rhoncus enim. Integer rutrum tempus velit vitae feugiat. Donec tristique dolor et magna cursus posuere.",
        id: this.props.formId,
    }

    componentDidMount() {
        const post = this.props.posts.find( post => post.id === this.state.id);
        console.log(post)
        this.setState({
            img: post.img,
            datePosted: Date.now(),
            title: post.title,
            author: post.author,
            description: post.description,
            id: this.props.formId,
        })
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updatePost = e => {
        e.preventDefault();
        this.props.updatePost(this.state);
    }

    render() {
        return (
            <div className="row container card" style={{margin:"40px auto", padding:"60px"}}>
                <form onSubmit={this.updatePost} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                        <textarea onChange={this.handleChanges} value={this.state.title} name="title" className="materialize-textarea"></textarea>
                        <label>Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea onChange={this.handleChanges} value={this.state.description} name="description" className="materialize-textarea"></textarea>
                            <label>Desctiption</label>
                        </div>
                    </div>
                    <div className="file-field input-field">
                    <div className="btn">
                        <span>Add Image</span>
                        <input type="file"/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text"/>
                    </div>
                    </div>
                    <button className="waves-effect waves-light btn #00695c teal darken-3">Update Post</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts,
    formId: state.formId
})

export default connect(mapStateToProps, { updatePost } )(UpdatePost)
