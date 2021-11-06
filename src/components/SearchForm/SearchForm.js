import React from 'react';
import SearchIcon from './../../images/search-icon.svg'
import Checkbox from '../Checkbox/Checkbox';
import { useState } from 'react';

function SearchForm( {handleSearchFilms} ) {

  const [values, setValues] = useState({});
  const [isChecked, setIsChecked] = React.useState(true);
  const handlerCheckBox = () => {
    setIsChecked(!isChecked);
  };

  function handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({
      ...values,
      [name]: value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('initialSavedMoviesPageState', 'false');
    handleSearchFilms(isChecked, values.keyValue);
  }

  return (
    <div className="search-form">
      <div className="search-form__container">
        <form
          noValidate={true}
          onSubmit={handleSubmit}
          className="search-form__search-container form__container">
          <input
          onChange={handleChange}
          className="search-form__field"
          placeholder="Фильм"
          type="text"
          value={values.keyValue || ''}
          name="keyValue"
          />
          <button
            type="submit"
            className="search-form__button">
            <img
            className="search-form__button-img"
            alt="Иконка поиска"
            src={SearchIcon}/>
          </button>
        </form>
        <div className="search-form__switcher">
          <p className="search-form__text">Короткометражки</p>
          <Checkbox
            handlerCheckBox={handlerCheckBox}
            isChecked={isChecked}/>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
