import React from 'react';
import {Route} from 'react-router-dom';
import UsersMenu from '../UsersMenu/UsersMenu';
import FilmsMenu from '../FilmsMenu/FilmsMenu';
import CloseIcon from '../../images/close-icon.svg';

function Popup( {isOpen, onClose} ) {

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__sub-container">
      </div>
      <div className="popup__container">
        <h2
          className="popup__header">
          Главная
        </h2>
        <img
          alt="Иконка закрытия"
          className="popup__close-icon"
          src={CloseIcon}
          onClick={onClose}
        />
        <Route exact path={['/']}>
          <UsersMenu
            onClose={onClose}/>
        </Route>
        <Route exact path={['/movies', '/saved-movies', '/profile']}>
          <FilmsMenu
            onClose={onClose}/>
        </Route>
      </div>
    </div>

  );
}

export default Popup;
