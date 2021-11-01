import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({width}) {

  const movies = [
    {"id":"1", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"2", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"3", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"4", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"5", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"6", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"7", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"8", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"9", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"10", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"11", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"12", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"13", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"14", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"15", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"16", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"17", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"18", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"19", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"20", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"21", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"22", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"23", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"24", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
    {"id":"25", "name": "33 слова о дизайне", "duration":"1ч 47м", "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"},
  ];



  return (
    <section className="movies">
      {/*или Main?*/}
      <SearchForm/>
      {/*<Preloader/>*/}

      <MoviesCardList
        width={width}
        movies={movies}>
      </MoviesCardList>
    </section>
  );
}

export default Movies;
