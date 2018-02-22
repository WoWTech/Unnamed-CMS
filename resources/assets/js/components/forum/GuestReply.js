import React from 'react';

const GuestReply = () => {
  return (
    <section className="guest-reply">
      <header>
        <h3>Join the Conversation</h3>
      </header>
      <div className="guest-reply-content">

        <div className="user-info">
          <span className="user-avatar" style={{backgroundImage: "url('/images/user-avatar.png')"}}></span>
          <div className="account-details">
            <div className="empty-username"></div>
            <div className="empty-group"></div>
          </div>
        </div>

        <div className="guest-reply-content">
          <div className="empty-textarea">
            <p>Have something to say? Log in to join the conversation.</p>
            <div className="buttons">
              <a href="#" className="login-button">Login</a>
              <p>OR</p>
              <a href="#" className="register-button">Register</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GuestReply;