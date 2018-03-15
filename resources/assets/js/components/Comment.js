import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <img src="../images/user_avatar.png" alt="" className="avatar" />
      <div className="comment-content">
        <div className="comment-header">
          { comment.username }
          <time dateTime={ comment.created_at.date }>{ comment.created_at.date }</time>

            <div className='action-buttons'>
                <a href="#" className="edit"></a>
                <a href="#" className="delete method-link" data-method="DELETE"></a>
            </div>
        </div>

        <div className="comment-body">{ comment.content }</div>
      </div>
    </div>
  );
};

export default Comment;