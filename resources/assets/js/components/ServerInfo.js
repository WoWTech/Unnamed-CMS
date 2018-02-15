import React, { Component } from 'react';

class ServerInfo extends Component {
  render() {
    return (
      <div className="server">
        <div className="server-info">
            <div className="realm-logo"></div>
            <div className="realm-name">
                Realm name placeholder
            </div>
            <span className="server-status-badge offline">Offline</span>
        </div>

        <div className="server-details">
            <span className="badge rounded">
              <span className="light-blue">0</span>
              <span style={{color:'#95989A'}}>/</span>
              <span className="red">0</span>
            </span>
            <span className="badge rounded red">
              Server is offline
            </span>
        </div>

        <div className="server-modes">
            <span className="badge red">PvP</span>
            <span className="badge yellow">PvE</span>
            <span className="badge light-blue">RP</span>
        </div>

        <div className="server-buttons">
            <a href="#">Registration</a>
            <a href="#">Forum</a>
            <a href="#">Statistic</a>
        </div>
      </div>
    );
  }
}

export default ServerInfo;