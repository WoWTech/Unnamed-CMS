import React, { Component } from 'react';

class PostForm extends Component {
  samplePost(action) {
    switch(action) {
      case 'Edit': 
        return {
          title: 'Post title',
          content: 'Post content'
        }
      default:
       return {}
    }
  }

  render() {
    const { action } = this.props;
    const post = this.samplePost(action);
    const route = action === 'Edit' 
      ? `/posts/${post}` 
      : `/posts`;

    return (
      <section className="page-content">
        <header>
          <h2>{action} post</h2>
        </header>
    
        <form action={route} method="POST">

          { action === 'Edit' && 
            <input name="_method" type="hidden" value="PATCH" /> }

          <div className="input-group">
            <label htmlFor="username">Title</label>
            <input name="title" type="text" value={post.title} required />
          </div>
    
          <div className="input-group">
            <label htmlFor="username">Content</label>
            <textarea title="content" name="content" required value={post.content}></textarea>
          </div>
    
          <div className="input-group">
            <input type="submit" value="Post" className="flex-left" />
          </div>
    
        </form>
      </section>
    );
  }
}

export default PostForm;