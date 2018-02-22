import React from 'react';
import UserInfo from './UserInfo';

const TopicNew = () => {
  return (
    <div className="create-topic-block" style={{display: 'none'}}>
      <UserInfo />

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