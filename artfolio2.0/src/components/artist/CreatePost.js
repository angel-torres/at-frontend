import React, { Component } from 'react';
import { createPost } from '../../actions';
import { connect } from 'react-redux';

class CreatePost extends Component {
    state = {
       postName: '',
       imageUrl: '',
       description: ''
    }

    createPost = e => {
        e.preventDefault();
        this.props.history.push(`/user/${this.props.user.id}`)
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

                        <textarea onChange={this.handleChanges} value={this.state.postName} name="postName" className="materialize-textarea"></textarea>
                        <label>Post Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea onChange={this.handleChanges} value={this.state.imageUrl} name="imageUrl" className="materialize-textarea"></textarea>
                            <label>Image Url</label>

                        </div>
                    </div>
                    <div className="row">
                        <div className="description">
                            <label className="add-info">Description</label>
                            <textarea onChange={this.handleChanges} value={this.state.description} name="description" className="description-textarea"></textarea>
                        </div>
                    </div>

                  
                    <button className="waves-effect waves-light btn #00695c teal darken-3">Create Post</button>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})


export default connect(mapStateToProps, { createPost })(CreatePost)