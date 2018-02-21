import React from 'react';
import Slider from './Slider';
import ServerInfo from './ServerInfo';

const Header = () => {
  return (
    <div className="upper-body">
      <div className="page-logo"></div>
      <div className="header">
        <Slider />
        <ServerInfo />
      </div>
    </div>
  );
};

export default Header;