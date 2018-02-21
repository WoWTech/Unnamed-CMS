import React from 'react';

const TopicNew = () => {
  return (
    <div className="create-topic-block" style={{display: 'none'}}>
      <div className="user-info">
        <span className="user-avatar" style={{backgroundImage: "url('/images/user-avatar.png')"}}></span>
        <div className="account-details">
          <span className="username">
            Username
          </span>
          <span className="group">
            Admin
          </span>
          <span className="posts">
            1000 posts
          </span>
        </div>
      </div>

      <div className="topic-details">
        <form action="#" method="post">
          <input type="text" name="title" />
          <textarea id="" rows="10" name="content"></textarea>
          <input type="submit" name="" className="red-button" value="Post" />
        </form>
      </div>

    </div>
  );
};

export default TopicNew;