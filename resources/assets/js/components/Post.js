import React from 'react';

const Post = ({ post }) => {
  return (
    <article>
      <header>
        <h2><a href="#">{ post.title }</a></h2>
        <time datetime={ post.created_at }>{ post.created_at }</time>
          <div class='action-buttons'>
              <a href="#" class="edit"></a>
              <a href="#" class="delete method-link" data-method="DELETE"></a>
          </div>
      </header>

      <p class="article-content">{ post.content }</p>
    </article>
  );
}

export default Post;