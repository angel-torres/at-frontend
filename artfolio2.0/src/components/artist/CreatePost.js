import React, { Component } from 'react';
import { createPost } from '../../actions';
import { connect } from 'react-redux';

class CreatePost extends Component {
    state = {
        img: "https://loremflickr.com/320/240",
        datePosted: Date.now(),
        title: "",
        author: this.props.user.firstName,
        description: "",
        id: 0,
    }

    createPost = e => {
        e.preventDefault();
        this.props.history.push('/user/:id')
        this.props.createPost(this.state);
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="dashboard-card">
                <form onSubmit={this.createPost} className="col s12">
                    <div className="row">
                        <label className="add-info">Title</label>
                        <div className="input-field col s12">
                        <textarea onChange={this.handleChanges} value={this.state.title} name="title" className="materialize-textarea"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="description">
                            <label className="add-info">Description</label>
                            <textarea onChange={this.handleChanges} value={this.state.description} name="description" className="description-textarea"></textarea>
                        </div>
                    </div>
                    <div className="file-field input-field">
                    <div className="btn">
                        <span className="add-image">Add Image</span>
                        <input type="file"/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path" type="text"/>
                    </div>
                    </div>
                    <button className="create-post-btn">Create Post</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})


export default connect(mapStateToProps, { createPost })(CreatePost)