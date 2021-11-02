import React from 'react';

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__name">Привет, Илья!</h2>

      <div className="profile__container">

        <form className="profile__form">

          <label className="profile__input-container">
            Имя
            <span className="profile__input-name"/>
            <input className="profile__input"/>
          </label>

          <label className="profile__input-container">
            E-mail
            <span className="profile__input-name"/>
            <input className="profile__input"/>
          </label>

          <button
            className="profile__form-submit"
            type="submit">
            Редактировать
          </button>
        </form>
        <button
          className="profile__logout-button"
          type="button"
        >
          Выйти из аккаунта
        </button>
      </div>

    </section>
  );
}

export default Profile;
