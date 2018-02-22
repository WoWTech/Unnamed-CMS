import React from 'react';

const UserInfo = () => {
  return (
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
  );
};

export default UserInfo;