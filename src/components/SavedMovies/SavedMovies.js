import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({width}) {

  const saved_movies = [
    {"id":"1", "name": "22 слова о дизайне", "duration":"1ч 47м", "link":"https://cdn.intesense.ru/wp-content/uploads/2018/05/svjashhennaja-gora-fudzi-legendy-o-gore-fudzi-2018-05-09_20-29-29_067024.jpg"},
    {"id":"2", "name": "22 слова о дизайне", "duration":"1ч 47м", "link":"https://cdn.intesense.ru/wp-content/uploads/2018/05/svjashhennaja-gora-fudzi-legendy-o-gore-fudzi-2018-05-09_20-29-29_067024.jpg"},
    {"id":"3", "name": "22 слова о дизайне", "duration":"1ч 47м", "link":"https://cdn.intesense.ru/wp-content/uploads/2018/05/svjashhennaja-gora-fudzi-legendy-o-gore-fudzi-2018-05-09_20-29-29_067024.jpg"},
    {"id":"4", "name": "22 слова о дизайне", "duration":"1ч 47м", "link":"https://cdn.intesense.ru/wp-content/uploads/2018/05/svjashhennaja-gora-fudzi-legendy-o-gore-fudzi-2018-05-09_20-29-29_067024.jpg"},
    {"id":"5", "name": "22 слова о дизайне", "duration":"1ч 47м", "link":"https://cdn.intesense.ru/wp-content/uploads/2018/05/svjashhennaja-gora-fudzi-legendy-o-gore-fudzi-2018-05-09_20-29-29_067024.jpg"},
  ];




  return (
    <section className="saved-movies">
      <SearchForm/>
      {/*<Preloader/>*/}
      <MoviesCardList
        width={width}
        movies={saved_movies}
        isSavedMovies={true}>
      </MoviesCardList>
    </section>
  );
}

export default SavedMovies;
