import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsList extends Component {
  samplePost() {
    return {
      id: 1,
      title: 'Title placeholder',
      content: 'Content placeholder',
      created_at: '1970-00-00'
    }
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <section className="page-content">

        <Post post={this.samplePost()} />
        {/* {{ $posts->links() }} */}

      </section>
    );
  }
}
export default connect(null, { fetchPosts })(PostsList);