import React from 'react';
import Logo from './../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({ width,   loggedIn }) {

  return (
    <header className="header">
      <div className="header__logo-container">
        <Logo/>
      </div>
        <div
          className="header__container">
          <Navigation
            loggedIn={loggedIn}
            width={width}/>
        </div>
    </header>

  );
}

export default Header;
