import React from 'react';
import AccountLogo from '../../images/account.svg';
import { NavLink } from 'react-router-dom';


function FilmsMenu({onClose}) {
  return (
    <ul className="films-menu">
      <li className="films-menu__item">
        <NavLink
          activeClassName="films-menu__active"
          onClick={onClose}
          to="/movies"
          className="films-menu__link">
          Фильмы
        </NavLink>
      </li>

      <li className="films-menu__item">
        <NavLink
          activeClassName="films-menu__active"
          onClick={onClose}
          to="/saved-movies"
          className="films-menu__link">
          Сохранённые фильмы
        </NavLink>
      </li>

      <li className="films-menu__item">
        <div className="films-menu__item-account">
          <NavLink
            onClick={onClose}
            to="/profile"
            className="films-menu__link">
            <img
              alt="Иконка аккаунта"
              className="films-menu__item-logo"
              src={AccountLogo}/>
            Аккаунт
          </NavLink>
        </div>
      </li>

    </ul>
  );
}

export default FilmsMenu;
