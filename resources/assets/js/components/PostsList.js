import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { getAllPosts } from '../selectors';
import Loader from './Loader'
import Waypoint from 'react-waypoint';

class PostsList extends Component {
  componentDidMount() {
    this.fetch_posts();
  }
    
  load_posts() {
    this.fetch_posts();
  }

  fetch_posts() {
    this.props.fetchPosts();
  }

  posts_list() {
    const { next_page_url } = this.props;
    return (
      <React.Fragment>
        {this.generate_posts()}
        {next_page_url !== null &&
          <Waypoint onEnter={() => this.load_posts()} />}
      </React.Fragment>
    );
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
        {!isEmpty && this.posts_list()}
        {this.props.isFetching && <Loader />}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  posts: getAllPosts(state),
  next_page_url: state.pagination.posts.next_page_url,
  isFetching: state.pagination.posts.isFetching
});

export default connect(mapStateToProps, { fetchPosts })(PostsList);