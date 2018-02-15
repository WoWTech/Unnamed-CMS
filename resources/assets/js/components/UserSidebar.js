import React, { Component } from 'react';

class UserSidebar extends Component {
  render() {
    return (
      <div className="block with-border">
        <div className="block-content">
          <div className="user-area">
            <div className="user-info">
              <div className="user-avatar"></div>

              <div className="user-details">
                  <p> Username </p>
                  <span className="bonuses">1000 bonuses</span>
              </div>
              <a href="#" data-method="POST" className="method-link">
                Logout
              </a>
            </div>
          </div>

          <div className="user-buttons">
            {/* @permission('view-dashboard')
              <a href="{{ route('dashboard') }}" class="btn red-bg">Control panel</a>
            @endpermission */}
            <a href="#" className="btn blue-bg">Account settings</a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserSidebar;