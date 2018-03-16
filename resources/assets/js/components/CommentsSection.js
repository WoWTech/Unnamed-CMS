import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import Loader from './Loader';
import Waypoint from 'react-waypoint';

const CommentsSection = ({ 
  comments,
  next_page_url,
  fetchPost,
  postId,
  isFetching
}) => {
  const commentsList = comments.map(comment => {
    return <Comment key={comment.id} comment={comment} />;
  });
    
  console.log(next_page_url);
  return (
    <section className="page-content">
      <header>
        <h2>Comments</h2>
      </header>
      <CommentForm />
      { commentsList }
      { next_page_url && <Waypoint onEnter={() => fetchPost(postId, next_page_url)} /> }
      { isFetching && <Loader />}
    </section>
  );
};

export default CommentsSection;