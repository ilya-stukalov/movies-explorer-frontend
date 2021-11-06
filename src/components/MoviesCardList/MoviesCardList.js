import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect } from 'react';

function MoviesCardList({width, movies, isSavedMovies, receivedSavedMovies, handleGetSavedFilms, handleSaveMovie, handleDeleteMovie, handleFavoriteMovie, filteredMovies, searchResultMessage}) {

  const [initialCount, setInitialCount] = React.useState(0);
  const [itemsToShow, setItemsToShow] = React.useState();
  const initialSavedMoviesPageState = localStorage.getItem('initialSavedMoviesPageState');

  useEffect(() => {
    if (width >= 768 && width < 1280) {
      setItemsToShow(8);
    }
    else if (width >= 1280) {
      setItemsToShow(12);
    }
    else {
      setItemsToShow(4);
    }
  }, []);

  useEffect(() => {
    if (width >= 768 && width < 1280) {
      setInitialCount(2);
    }
    else if (width >= 1280) {
      setInitialCount(3);
    }
    else {
      setInitialCount(1);
    }
  }, [width]);

  function handleShow() {
    if (itemsToShow < movies.length) {
      setItemsToShow(itemsToShow + initialCount);
    }
  }

  return (
    <section className="movies-card-list">

      {
        searchResultMessage ?
          (<p
            className="movies-card-list__message">{searchResultMessage}</p>)
          :
          (<ul className="movies-card-list__list">

            {
          isSavedMovies && initialSavedMoviesPageState === 'false' &&
          (filteredMovies.map((item) => (
                (<li
                  key={item.movieId}
                  className="movies-card-list__item">
                  <MoviesCard
                    key={item.movieId}
                    movie={item}
                    isSavedMovies={isSavedMovies}
                    receivedSavedMovies={receivedSavedMovies}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                </li>)
              )
            )
          )
          }

          {
            isSavedMovies && initialSavedMoviesPageState === 'true' &&
          (movies.map((item) => (
              (<li
                key={item.movieId}
                className="movies-card-list__item">
                <MoviesCard
                  key={item.movieId}
                  movie={item}
                  isSavedMovies={isSavedMovies}
                  receivedSavedMovies={receivedSavedMovies}
                  handleDeleteMovie={handleDeleteMovie}
                />
              </li>)
            )
          ))
          }

          {
            !isSavedMovies && (movies.slice(0, itemsToShow).map((item) => (
                (<li
                  key={item.id}
                  className="movies-card-list__item">
                  <MoviesCard
                    key={item.id}
                    movie={item}
                    isSavedMovies={isSavedMovies}
                    receivedSavedMovies={receivedSavedMovies}
                    handleGetSavedFilms={handleGetSavedFilms}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                    handleFavoriteMovie={handleFavoriteMovie}/>
                </li>)
              )
            )
          )
          }
        </ul>)
      }
        {
          itemsToShow < movies.length && !isSavedMovies ?
          <div
            className="movies-card-list__container">
            <button
              className="movies-card-list__btn-more"
              onClick={() => handleShow()}>
              Ещё
            </button>
          </div> : ''
      }

    </section>
  );
}

export default MoviesCardList;
