import React, { Component } from "react"
import { connect } from "react-redux"
import { createPost } from "../actions/PostActions"
import PropTypes from "prop-types"

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      body: "",
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const post = {
      title: this.state.title,
      body: this.state.body,
    }

    this.props.createPost(post)
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea name="body" onChange={this.handleChange} value={this.state.body} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
}

export default connect(
  null,
  { createPost }
)(PostForm)
