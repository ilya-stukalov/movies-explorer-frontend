import React from 'react';

import Header from './../Header/Header.js';
import Main from './../Main/Main.js';
import Footer from './../Footer/Footer.js';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {Route, Switch} from 'react-router-dom';
import NotFound from '../NotFound/NotFound'

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  const [width, setWidth] = React.useState(window.innerWidth);

  window.onresize = function( event ) {
    setWidth(event.target.innerWidth);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">

      <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
        <Header
          width={width}
        />
      </Route>

      <Switch>
        <Route
          path="/signin"
        >
          <Login />
        </Route>

        <Route
          path="/signup"
        >
          <Register />
        </Route>

        <Route
          path="/movies"
        >
          <Movies
            width={width}
          />
        </Route>

        <Route
          path="/saved-movies"
        >
          <SavedMovies
            width={width}/>
        </Route>

        <Route
          path="/profile"
        >
          <Profile/>
        </Route>


        <Route
          exact path="/"
        >
          <Main />
        </Route>


        <Route path="*">
          <NotFound />
        </Route>

      </Switch>

      <Route exact path={['/', '/movies', '/saved-movies']}>
        <Footer />
      </Route>

    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
