import React, { Component } from 'react'

export default class CreatePost extends Component {
  render() {
    return (
        <div class="row container">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                    <label for="textarea1">Desctiption</label>
                    </div>
                </div>
                <div class="file-field input-field">
                <div class="btn">
                    <span>Add Image</span>
                    <input type="file"/>
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text"/>
                </div>
                </div>
            </form>
        </div>
    )
  }
}