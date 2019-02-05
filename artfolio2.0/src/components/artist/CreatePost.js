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
        console.log(this.props)
        return (
            <div className="row container card" style={{margin:"40px auto", padding:"60px"}}>
                <form onSubmit={this.createPost} className="col s12">
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