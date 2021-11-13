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
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import * as mainApi from '../../utils/MainApi.js';
import * as moviesApi from '../../utils/MoviesApi.js';
import ProtectedRoute from '../../utils/ProtectedRoute.js';
import { useEffect } from 'react';
import  InfoTooltip from '../InfoTooltip/InfoTooltip';
import { findError } from '../../utils/utils';

function App() {
  const history = useHistory();
  const location = useLocation();
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [receivedMovies, setReceivedMovies] = React.useState([]);
  const [receivedSavedMovies, setReceivedSavedMovies] = React.useState([]);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState([]);
  const [searchResultMessage, setSearchResultMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    }
  })

  React.useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      mainApi.getSavedFilms()
        .then((values) => {
          values.data.forEach((movie) => {
            if (movie.owner === currentUser._id) {
              setReceivedSavedMovies(prevState => (
                [...prevState, movie]
              ));
            }
          });
        })
        .catch((err) => {
          setErrorMessage(findError(err));
          handleInfoTooltip(false);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [loggedIn]);

  useEffect(() => {
      tokenCheck();
  }, []);

  function updateWidth() {
    setWidth(window.innerWidth);
  }

  function handleUpdateSearchResult() {
    setFilteredMovies([]);
    setFilteredSavedMovies([]);
  }

  function handleSaveMovie(movie) {
    setReceivedSavedMovies(prevState => (
      [ ...prevState, movie ]
    ));
  }

  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setReceivedSavedMovies((state) =>
          state.filter((c) =>
            c._id !== movie._id ? true : false)
        )
      })
      .then(() => {
        setFilteredSavedMovies((state) =>
          state.filter((c) =>
            c._id !== movie._id ? true : false)
        )
      })
      .catch((err) => {
        setErrorMessage(findError(err));
        handleInfoTooltip(false);
        console.log(err);
      })
  }

  function handleFavoriteMovie(movie) {
    return mainApi.addMovieToFavorite(movie)
      .then((res) => {
        handleSaveMovie(res);
        return res;
      })
      .catch((err) => {
        setErrorMessage(findError(err));
        handleInfoTooltip(false);
        console.log(err);
      })
  }

  function handleUnfavoriteMovie(movie) {
    let unfavoriteMovie = receivedSavedMovies.find(item => item.movieId === movie.id);
    return mainApi.deleteMovie(unfavoriteMovie._id)
      .then((res) => {
        let unfavoriteMovie = res.data;
          setReceivedSavedMovies((state) =>
            state.filter((c) =>
              c._id !== unfavoriteMovie._id ? true : false)
          )
        return res;
        })
      .catch((err) => {
        setErrorMessage(findError(err));
        handleInfoTooltip(false);
        console.log(err);
      })
  }


  async function handleGetExternalFilms() {
    setIsLoading(true);
    if (receivedMovies.length === 0) {
      return moviesApi.getFilms()
        .then((data) => {
          setReceivedMovies(data);
          return data;
        })
        .catch((err) => {
          setErrorMessage(findError(err));
          handleInfoTooltip(false);
          console.log(err);
        })
    }
    else {
      return receivedMovies;
    }
  }

  function handleSearchSavedFilms(checked, key) {
    setSearchResultMessage('');
    if (key) {
      let movies = receivedSavedMovies.filter((movie) => JSON.stringify(movie).toLowerCase().includes(key.toLowerCase()));
      if (movies.length === 0) {
        setSearchResultMessage('Ничего не найдено');
      }
      else {
        if (checked) {
          movies = movies.filter(movie => movie.duration <= 40);
          if (movies.length === 0) {
            setSearchResultMessage('Ничего не найдено');
          }
          else setFilteredSavedMovies(movies);
        }
        else setFilteredSavedMovies(movies);
      }
    }
    else setSearchResultMessage('Введите слово для поиска');
  }

  async function handleSearchFilms(checked, key) {
    setSearchResultMessage('');
    setFilteredMovies([]);
    if (key) {
      let movies = await handleGetExternalFilms();
      if (movies) {
        movies = movies.filter((movie) => JSON.stringify(movie).toLowerCase().includes(key.toLowerCase()));
        if (movies.length === 0) {
          setIsLoading(false);
          setSearchResultMessage('Ничего не найдено');
        } else {
          if (checked) {
            movies = movies.filter(movie => movie.duration <= 40);
            if (movies.length === 0) {
              setIsLoading(false);
              setSearchResultMessage('Ничего не найдено');
            } else {
              console.log(movies);
              setIsLoading(false);
              setFilteredMovies(movies);
            }
          } else {
            setIsLoading(false);
            setFilteredMovies(movies);
          }
        }
      } else {
        setIsLoading(false);
        setSearchResultMessage('Во время запроса произошла ошибка. ' +
          'Возможно, проблема с соединением или сервер недоступен. ' +
          'Подождите немного и попробуйте ещё раз');
      }
    } else {
      setIsLoading(false);
      setSearchResultMessage('Введите слово для поиска');
    }
  }

  function handleRegistration(values) {
    mainApi.register(values)
      .then(() => {
        handleLogin(values);
        handleInfoTooltip(true);
      })
      .catch((err) => {
        setErrorMessage(findError(err));
        handleInfoTooltip(false);
        console.log(err);
      })
  }

  function handleLogin(values) {
    mainApi.authorize(values.email, values.password)
      .then((res) => {
        if (res) {
          tokenCheck();
        }
    })
      .catch((err) => {
        setErrorMessage(findError(err));
        handleInfoTooltip(false);
        console.log(err);
      })
  }

  function tokenCheck() {
    const path = location.pathname;
    mainApi.getContent()
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res));
        const user = JSON.parse(localStorage.getItem('user'));
        setCurrentUser(user);
        setLoggedIn(true);
        path === '/signin' ||  path === '/signup' ? history.push('/movies') : history.push(path);
      })
      .catch((err) => {
        console.log(findError(err));
      })
      }

  function signOut() {
    setLoggedIn(false);
    setReceivedSavedMovies([]);
    mainApi.deleteCookies();
    localStorage.removeItem('user');
    history.push('/');
  }

  function deleteSearchResultMessage() {
    setSearchResultMessage('');
  }

  function updateUserInfo(data) {
    mainApi.updateUser(data)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data));
        setCurrentUser(res.data);
        handleInfoTooltip(true);
      })
      .catch((err) => {
        setErrorMessage(findError(err));
        handleInfoTooltip(false);
        console.log(err);
      })
  }

  function closeAllPopups() {
    setIsInfoTooltipOpen(false);
  }

  function handleInfoTooltip(success) {
    if (success) {
      setIsSuccess(true);
      setIsInfoTooltipOpen(true);
    }
    else {
      setIsSuccess(false);
      setIsInfoTooltipOpen(true);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">

      <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
        <Header
          loggedIn={loggedIn}
          width={width}
        />
      </Route>

      <Switch>

        <Route
          exact path="/"
        >
          <Main />
        </Route>

        <ProtectedRoute
          exact path="/movies"
          component={Movies}
          loggedIn={loggedIn}
          width={width}
          isLoading={isLoading}
          filteredMovies={filteredMovies}
          handleSearchFilms={handleSearchFilms}
          receivedSavedMovies={receivedSavedMovies}
          handleSaveMovie={handleSaveMovie}
          handleDeleteMovie={handleUnfavoriteMovie}
          handleFavoriteMovie={handleFavoriteMovie}
          handleUpdateSearchResult={handleUpdateSearchResult}
          searchResultMessage={searchResultMessage}
          deleteSearchResultMessage={deleteSearchResultMessage}
        />

        <ProtectedRoute
          exact path="/saved-movies"
          component={SavedMovies}
          loggedIn={loggedIn}
          width={width}
          receivedSavedMovies={receivedSavedMovies}
          filteredSavedMovies={filteredSavedMovies}
          handleDeleteMovie={handleDeleteMovie}
          handleSearchFilms={handleSearchSavedFilms}
          searchResultMessage={searchResultMessage}
          deleteSearchResultMessage={deleteSearchResultMessage}
        />

        <ProtectedRoute
          exact path="/profile"
          component={Profile}
          loggedIn={loggedIn}
          signOut={signOut}
          updateUserInfo={updateUserInfo}
        />

        <Route
          path="/signin"
        >
          <Login
            handleLogin={handleLogin}/>
        </Route>

        <Route
          path="/signup"
        >
          <Register
            handleRegistration={handleRegistration}/>
        </Route>

        <Route component={NotFound} />

      </Switch>

      <Route exact path={['/', '/movies', '/saved-movies']}>
        <Footer />
      </Route>

      <InfoTooltip
        errorMessage={errorMessage}
        onClose={closeAllPopups}
        isOpen={isInfoTooltipOpen}
        isSuccess={isSuccess}
        name="infotooltip"
      >
      </InfoTooltip>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
