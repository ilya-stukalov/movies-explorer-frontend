import React from 'react';
import Logo from './../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({width}) {

  return (
    <header className="header">
      <div className="header__logo-container">
        <Logo/>
      </div>
        <div
          className="header__container">
          <Navigation
            width={width}/>
        </div>
    </header>

  );
}

export default Header;
