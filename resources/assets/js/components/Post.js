import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post, children }) => {
  return (
    <article>
      <header>
        <h2>
          { children ? post.title 
                     : <Link to={`/posts/${post.id}`}>{post.title}</Link> }
          </h2>
        <time datetime={ post.created_at }>{ post.created_at }</time>
          <div class='action-buttons'>
              <a href="#" class="edit"></a>
              <a href="#" class="delete method-link" data-method="DELETE"></a>
          </div>
      </header>

      <p class="article-content">{ post.content }</p>

      { children }
    </article>
  );
}

export default Post;