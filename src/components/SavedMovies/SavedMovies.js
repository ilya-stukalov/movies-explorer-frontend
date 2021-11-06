import React, {useEffect} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({width, handleSearchFilms, receivedSavedMovies, handleDeleteMovie, filteredSavedMovies, searchResultMessage, deleteSearchResultMessage
  }) {

  useEffect(() => {
    localStorage.setItem('initialSavedMoviesPageState', 'true');
    deleteSearchResultMessage();
  }, []);


  return (
    <section className="saved-movies">
      <SearchForm
        handleSearchFilms={handleSearchFilms}/>
      <MoviesCardList
        width={width}
        movies={receivedSavedMovies}
        filteredMovies={filteredSavedMovies}
        handleDeleteMovie={handleDeleteMovie}
        isSavedMovies={true}
        searchResultMessage={searchResultMessage}>
      </MoviesCardList>
    </section>
  );
}

export default SavedMovies;
