import React from 'react';

const LoginForm = () => {
  return (
    <div className="block">
        <div className="block-header">
          Login
        </div>
        <div className="block-content">
          <form action="#" method="post">
            <input type="text" name="username" placeholder="Account" value="" />
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" value="Submit" className="blue" />
          </form>
        </div>
    </div>
  );
};

export default LoginForm;