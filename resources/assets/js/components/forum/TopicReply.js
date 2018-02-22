import React from 'react';
import UserInfo from './UserInfo';

const TopicReply = () => {
  return (
    <div className="topic-reply">
        <div className="manage-reply"></div>
        <div className="manage-topic-actions" onmouseleave="closeActionsMenu(this)" style={{display: 'none'}}>
          <ul>
            <li><a href="javascript:void(0)" data-id="0" className="method-link edit-link">Edit</a></li>
            <li><a href="#" className="method-link" data-method='DELETE'>Delete</a></li>
          </ul>
        </div>
      <UserInfo />

      <div className="reply-content" data-id="0">
        <time>12 minutes ago</time>
        <p>Reply content placeholder</p>
      </div>

    </div>
  );
};

export default TopicReply;