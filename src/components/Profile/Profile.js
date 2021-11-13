import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormValidation } from '../../hooks/useFormValidation';

function Profile({updateUserInfo, signOut}) {

  const {
    handleChange,
    forceValidityUpdate,
    values,
    errors,
    isValid
  } = useFormValidation({});

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    values.name = currentUser.name;
    values.email = currentUser.email;
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    updateUserInfo(values);
    forceValidityUpdate();
  }

  function handleEmailChange(e) {
    handleChange(e);
    if (e.target.value === currentUser.email && values.name === currentUser.name) {
      forceValidityUpdate();
    }
  }

  function handleNameChange(e) {
    handleChange(e);
    if (e.target.value === currentUser.name && values.email === currentUser.email) {
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
                onChange={handleNameChange}
                name="name"
                type="text"
                required
                minLength="2"
                maxLength="30"
                placeholder={currentUser.name}
                value={values.name || ''}
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
                onChange={handleEmailChange}
                name="email"
                type="email"
                required
                placeholder={currentUser.email}
                value={values.email || ''}
                pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
                className="profile__input"/>
            </div>

            <span className="profile__item-error profile__item-error_active">{ errors.email }</span>
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
