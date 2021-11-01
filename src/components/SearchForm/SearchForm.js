import React from 'react';
import SearchIcon from './../../images/search-icon.svg'
import Checkbox from '../Checkbox/Checkbox';

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <div className="search-form__search-container">
          <input
          className="search-form__field"
          placeholder="Фильм"
          />
          <button className="search-form__button">
            <img
            className="search-form__button-img"
            alt="Иконка поиска"
            src={SearchIcon}/>
          </button>
        </div>
        <div className="search-form__switcher">
          <p className="search-form__text">Короткометражки</p>
          <Checkbox />
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
