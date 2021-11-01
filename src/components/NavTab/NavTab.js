import React from 'react';

function NavTab() {

  return (
    <nav className="nav">
     <ul className="nav__container">
       <li className="nav__item-area">
         <a className="nav__item" href="#about-project">
           О проекте
         </a>
       </li>
       <li className="nav__item-area">
         <a className="nav__item" href="#about-techs">
           Технологии
         </a>
       </li>
       <li className="nav__item-area">
         <a className="nav__item" href="#about-me">
           Студент
         </a>
       </li>
     </ul>
    </nav>
  );
}

export default NavTab;
