import React from 'react';

const CommentForm = () => {
  return (
    <div className="add-comment">
        <img src="../images/user_avatar.png" alt="" className="avatar" />
        <div className="input-comment-area">
          <span className="username">Username</span>
          <form action="#" method="post">
            <textarea name="content" id="" cols="30" rows="10" required></textarea>
            <div className="action">
              <input type="submit" className="blue-bg" />
            </div>
          </form>
        </div>
    </div>
  );
};

export default CommentForm;