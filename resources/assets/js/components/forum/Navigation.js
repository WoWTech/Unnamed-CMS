import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="#">User panel</a>
      <a href="/online">Players Online</a>
      <div className="user-bar">Username</div>
    </nav>
  );
};

export default Navigation;