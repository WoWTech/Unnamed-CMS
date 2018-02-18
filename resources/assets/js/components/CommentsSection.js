import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentsSection = ({ comments }) => {
  const commentsList = comments.map(comment => {
    return <Comment key={comment.id} comment={comment} />;
  });

  return (
    <section className="page-content">
      <header>
        <h2>Comments</h2>
      </header>
      <CommentForm />
      { commentsList }

    </section>
  );
};

export default CommentsSection;