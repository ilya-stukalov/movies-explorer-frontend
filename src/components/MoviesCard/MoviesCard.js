import React from 'react';
import FavImage from '../../images/favi-icon.svg';
import UnFavImage from '../../images/un-favi-icon.svg';
import DelButton from '../../images/delete-btn.svg';
function MoviesCard( {movie, isSavedMovies} ) {

  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="movies-card">
      {/*или Main?*/}
      <div className="movies-card__wrap">
        <div>
          <h2 className="movies-card__header">{movie.name}</h2>
          <p className="movies-card__text">{movie.duration}</p>
        </div>

        { isSavedMovies ?
          (<img
            alt="иконка избранного"
            className="movies-card__favorite-image"
            src={DelButton}
            onClick={handleFavorite}
          />) :
          (
            <img
            alt="иконка избранного"
            className="movies-card__favorite-image"
            src={isFavorite ? FavImage : UnFavImage}
            onClick={handleFavorite}
          />)

        }
      </div>
      <img
        alt="Фото фильма"
        src={movie.link}
        className="movies-card__photo"
      />
    </div>
  );
}

export default MoviesCard;
