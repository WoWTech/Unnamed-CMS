import React, { Component } from 'react';
import Post from './Post';

class PostsList extends Component {

  samplePost() {
    return {
      id: 1,
      title: 'Title placeholder',
      content: 'Content placeholder',
      created_at: '1970-00-00'
    }
  }

  render() {
    return (
      <section class="page-content">

        <Post post={this.samplePost()} />
        {/* {{ $posts->links() }} */}

      </section>
    );
  }
}
export default PostsList;