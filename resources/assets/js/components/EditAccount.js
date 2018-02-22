import React from 'react';

const EditAccount = () => {
  return (
    <section className="page-content">
      <header>
        <h2>Edit Account</h2>
      </header>
      <form action="#" method="POST" encType="multipart/form-data">
        <div className="user-panel">
            <div className="user-avatar">
              <img src="#" id="avatar" />
              <a href="javascript:void(0)" className="change-avatar">
                Upload image
                <input type="file" name="avatar" className="invisible-input" id="avatar-uploader" />
              </a>

            </div>
            <div className="user-data">
              <div className="input-group">
                <label htmlFor="username">Login</label>
                <input id="username" type="text" name="username" value="Username" disabled />
              </div>

              <div className="input-group">
                <label htmlFor="password">Old Password</label>
                <input id="password" type="password" name="old_password" placeholder="*************" />
              </div>

              <div className="input-group">
                <label htmlFor="password-confirm">New password</label>
                <input id="password-confirm" type="password" className="form-control" name="password" />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="example@mail.com" />
              </div>

              <div className="input-group">
                <input type="submit" value="Save" />
              </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default EditAccount;