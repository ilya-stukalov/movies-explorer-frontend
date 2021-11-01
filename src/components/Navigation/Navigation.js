import React from 'react';
import FilmsMenu from '../FilmsMenu/FilmsMenu';
import UsersMenu from '../UsersMenu/UsersMenu'
import {Route, Switch} from 'react-router-dom';
import MenuLabel from '../../images/menu-label.svg';
import Popup from '../Popup/Popup';

function Navigation({width}) {

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  function handleMenuClick() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }


  return (
    <nav className="navigation">
      {width <= 768 &&
        (<>
          <Route exact path={['/movies', '/saved-movies', '/profile']}>
            <img
              className="navigation__menu-label"
              src={MenuLabel}
              onClick={handleMenuClick}
            />
            <Popup
              isOpen={isPopupOpen}
              onClose={closePopup}
            />
          </Route>

          <Route exact path={['/']}>
            <UsersMenu />
          </Route>

        </>) }

      { width > 768 &&
        (<>
          <Route exact path={['/movies', '/saved-movies', '/profile']}>
            <FilmsMenu
            />
          </Route>

          <Route exact path={['/']}>
            <UsersMenu />
          </Route>
        </>)
      }
    </nav>
  )
}

export default Navigation;
