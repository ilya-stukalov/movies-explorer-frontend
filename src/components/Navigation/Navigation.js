import React from 'react';
import FilmsMenu from '../FilmsMenu/FilmsMenu';
import UsersMenu from '../UsersMenu/UsersMenu'
import { Route } from 'react-router-dom';
import MenuLabel from '../../images/menu-label.svg';
import Popup from '../Popup/Popup';

function Navigation({ width, loggedIn }) {

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  function handleMenuClick() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }


  return (
    <nav className="navigation">










      { loggedIn && width <= 768 &&
        (<>
          <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
            <img
              alt="Иконка меню"
              className="navigation__menu-label"
              src={MenuLabel}
              onClick={handleMenuClick}
            />
            <Popup
              isOpen={isPopupOpen}
              onClose={closePopup}
            />
          </Route>
        </>) }

      { loggedIn && width > 768 &&
        (<>
          <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
            <FilmsMenu
            />
          </Route>
        </>)
      }

      { !loggedIn &&
      (<Route exact path={['/']}>
        <UsersMenu />
      </Route>)
      }

    </nav>
  )
}

export default Navigation;
