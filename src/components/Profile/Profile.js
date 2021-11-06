import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormValidation } from '../../hooks/useFormValidation';

function Profile({updateUserInfo, signOut}) {

  const {
    handleChange,
    forceValidityUpdate,
    values,
    errors,
    isValid,
    resetForm
  } = useFormValidation({});

  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    updateUserInfo(values);
    resetForm();
  }

  function handleInputChange(e) {
    handleChange(e);
    if ((e.target.name === 'name' && e.target.value === currentUser.name) || (e.target.name === 'email' && e.target.value === currentUser.email)) {
      forceValidityUpdate();
    }
  }

  return (
    <section className="profile">
      <h2 className="profile__name">Привет, {currentUser.name}!</h2>

      <div className="profile__container">

        <form
          noValidate={true}
          onSubmit={handleSubmit}
          className="profile__form form__container">

          <label className="profile__input-block">
            <div className="profile__input-container">
              <span className="profile__input-name">
              Имя
              </span>
              <input
                onChange={handleInputChange}
                name="name"
                type="text"
                minLength="2"
                maxLength="30"
                placeholder={currentUser.name}
                value={values.name || currentUser.name}
                className="profile__input"/>
            </div>
            <span className="profile__item-error profile__item-error_active">{errors.name}</span>
          </label>

          <label className="profile__input-block">
            <div className="profile__input-container">
              <span className="profile__input-name">
              E-mail
              </span>
              <input
                onChange={handleInputChange}
                name="email"
                type="email"
                required
                placeholder={currentUser.email}
                value={values.email || currentUser.email}
                className="profile__input"/>
            </div>

            <span className="profile__item-error profile__item-error_active">{errors.email}</span>
          </label>

          <button
            disabled={!isValid}
            className="profile__form-submit"
            type="submit">
            Редактировать
          </button>
        </form>
        <button
          className="profile__logout-button"
          type="button"
          onClick={signOut}
        >
          Выйти из аккаунта
        </button>
      </div>

    </section>
  );
}

export default Profile;
