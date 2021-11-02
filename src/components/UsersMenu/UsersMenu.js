import React from 'react';
import {Link} from 'react-router-dom';

function UsersMenu( {onClose} ) {

  return (
    <ul className="users-menu__container">

      <li className="users-menu__signup-button">
        <Link
          onClick={onClose}
          to="/signup"
          className="users-menu__link">
          Регистрация
        </Link>
      </li>

      <li className="users-menu__signin-button">
        <Link
          onClick={onClose}
          to="/signin"
          className="users-menu__link users-menu__link_color_white">
          Войти
        </Link>
      </li>

    </ul>
  );
}

export default UsersMenu;
