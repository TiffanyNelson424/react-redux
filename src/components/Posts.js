import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { fetchPosts } from "../actions/PostActions"

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      nextProps.posts.unshift(nextProps.newPost) // unshift adds element to the front of array
    }
  }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
}

// takes the app state (from store), and returns object to be included in component's props
const mapStateToProps = (state) => ({
  posts: state.posts.items, // reason for using state.posts is that in reducer we call it posts
  newPost: state.posts.item,
})

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts)
