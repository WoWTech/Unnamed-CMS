import React, { Component } from 'react';
import CommentsSection from './CommentsSection';
import Post from './Post';

class PostPage extends Component {
  samplePost() {
    return {
      title: 'Title placeholder',
      content: 'Content placeholder',
      created_at: '1970-00-00'
    }
  }

  sampleComments(count) {
    let comments = new Array(count);

    for (let index = 0; index < count; index++) {
      comments[index] = {
        id: index,
        account: 'Username',
        content: 'Sample comment content',
        created_at: '18.02.2018 18:25'
      }
    }

    return comments;  
  }

  render() {
    const comments =  this.sampleComments(5);

    return (
      <section className="view-post">
        <Post post={ this.samplePost() }>
          { comments && <CommentsSection comments={ comments } /> }
        </Post>
      </section>
    );
  }
}

export default PostPage;