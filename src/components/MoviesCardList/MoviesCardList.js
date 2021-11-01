import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect } from 'react';

function MoviesCardList({width, movies, isSavedMovies}) {

  const [initialCount, setInitialCount] = React.useState(0);
  const [itemsToShow, setItemsToShow] = React.useState();

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
      setInitialCount(8);
    }
    else if (width >= 1280) {
      setInitialCount(12);
    }
    else {
      setInitialCount(4);
    }
  }, [width]);

  function handleShow() {
    if (itemsToShow < movies.length) {
      setItemsToShow(itemsToShow + initialCount);
    }
  }

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
      {movies.slice(0, itemsToShow).map((item) => (
        <li
          key={item.id}
          className="movies-card-list__item">
          <MoviesCard
            key={item.id}
            movie={item}
            isSavedMovies={isSavedMovies}
          />
        </li>
        )
      )}
      </ul>
      {
        itemsToShow < movies.length ?
          <div
            className="movies-card-list__container">
            <button
              className="movies-card-list__btn-more"
              onClick={()=> handleShow()}>
              Ещё
            </button>
          </div> : ''

            }
    </section>
  );
}

export default MoviesCardList;
