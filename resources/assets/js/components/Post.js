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
        <time dateTime={ post.created_at }>{ post.created_at }</time>
          <div className='action-buttons'>
              <a href="#" className="edit"></a>
              <a href="#" className="delete method-link" data-method="DELETE"></a>
          </div>
      </header>

      <p className="article-content">{ post.content }</p>

      { children }
    </article>
  );
}

export default Post;