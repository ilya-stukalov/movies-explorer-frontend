import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect } from 'react';
import Preloader from '../Preloader/Preloader';


function Movies({ width, filteredMovies, receivedSavedMovies, handleSearchFilms, handleGetSavedFilms,handleSaveMovie,
                  handleDeleteMovie, handleFavoriteMovie, handleUpdateSearchResult, searchResultMessage,
                  deleteSearchResultMessage, isLoading}) {

  useEffect(() => {
    handleUpdateSearchResult();
    deleteSearchResultMessage();
  }, []);

  return (
    <section className="movies">
      {/*или Main?*/}
      <SearchForm
        handleSearchFilms={handleSearchFilms}/>
      {isLoading ? <Preloader/> : ''}

      <MoviesCardList
        width={width}
        movies={filteredMovies}
        handleUpdateSearchResult={handleUpdateSearchResult}
        receivedSavedMovies={receivedSavedMovies}
        handleGetSavedFilms={handleGetSavedFilms}
        handleSaveMovie={handleSaveMovie}
        handleDeleteMovie={handleDeleteMovie}
        handleFavoriteMovie={handleFavoriteMovie}
        searchResultMessage={searchResultMessage}>
      </MoviesCardList>
    </section>
  );
}

export default Movies;
