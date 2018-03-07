import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { getAllPosts } from '../selectors';
import Loader from './Loader'

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  generate_posts() {
    return this.props.posts.map(post =>
      <Post key={post.id} post={post} />
    );
  }

  render() {
    const isEmpty = this.props.posts.length === 0;
    return (
      <section className="page-content">
        {!isEmpty && this.generate_posts()}
        {this.props.isFetching && <Loader />}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  posts: getAllPosts(state),
  isFetching: state.pagination.isFetching
});

export default connect(mapStateToProps, { fetchPosts })(PostsList);