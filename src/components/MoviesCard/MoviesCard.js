import React from 'react';
import FavImage from '../../images/favi-icon.svg';
import UnFavImage from '../../images/un-favi-icon.svg';
import DelButton from '../../images/delete-btn.svg';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function MoviesCard( {movie, isSavedMovies, receivedSavedMovies, handleDeleteMovie, handleFavoriteMovie} ) {

  const location = useLocation().pathname;
  const [isFavorite, setIsFavorite] = React.useState(false);

  useEffect(() => {
    if (location === '/movies' && receivedSavedMovies.length > 0 && receivedSavedMovies.some((i) => i.movieId === movie.id)) {
      setIsFavorite(true);
    }
  }, []);

  function handleFavorite() {
    if (isFavorite === false) {
      return handleFavoriteMovie(movie)
        .then((res) => {
          if (res) {
          setIsFavorite(true);
          }
        }
        );
    }
    else if (isFavorite === true) {
     return handleDeleteMovie(movie)
       .then((res) => {
           if (res) {
             setIsFavorite(false);
           }
         }
       );
    }
  }

  function handleDelete() {
    handleDeleteMovie(movie);
  }

  function handleImageClick() {
    location === '/movies'
      ? window.open(movie.trailerLink, '_blank')
      : window.open(movie.trailer, '_blank')
  }

  return (
    <div className="movies-card">
      {/*или Main?*/}
      <div className="movies-card__wrap">
        <div>
          <h2 className="movies-card__header">{movie.nameRU}</h2>
          <p className="movies-card__text">{`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`}</p>
        </div>

        { isSavedMovies ?
          (<img
            alt="иконка избранного"
            className="movies-card__favorite-image"
            src={DelButton}
            onClick={handleDelete}
          />)
          :
          (
            <img
            alt="иконка избранного"
            className="movies-card__favorite-image"
            src={isFavorite ? FavImage : UnFavImage}
            onClick={handleFavorite}
          />)

        }
      </div>

      { isSavedMovies ?
        (
          <img
          alt="Фото фильма"
          onClick={handleImageClick}
          src={movie.image}
          className="movies-card__photo"/>
        ) :
        (
          <img
            alt="Фото фильма"
            onClick={handleImageClick}
            src={`https://api.nomoreparties.co${movie.image.url}`}
            className="movies-card__photo"/>
        )

      }
    </div>
  );
}

export default MoviesCard;
