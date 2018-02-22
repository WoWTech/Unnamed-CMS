import React from 'react';
import UserInfo from './UserInfo';

const NewReply = () => {
  return (
    <section className="reply">
      <UserInfo />
      
      <div className="reply-content" style={{alignItems: "flex-end"}}>
        <form action="#" method="post">
          <textarea name="content" id="" rows="10"></textarea>
          <input type="submit" className="red-button right" value="Post reply" />
        </form>
      </div>
    </section>
  );
};

export default NewReply;