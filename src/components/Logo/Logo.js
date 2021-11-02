import React from 'react';
import logo from './../../images/header-logo.svg';

function Logo() {

  return (
    <a
      href="/#about-project"
      className="logo__link">
      <img
        className="logo"
        src={logo}
        alt="логотип"
      />
    </a>
  );
}

export default Logo;
