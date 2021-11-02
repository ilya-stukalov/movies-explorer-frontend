import React from 'react';
import SignForm from '../SignForm/SignForm';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom';

function Register() {
  return (
    <section className="signup">
      <div className="signup__container">
        <div className="signup__logo">
          <Logo/>
        </div>
        <h2 className="signup__header">Добро пожаловать!</h2>
        <SignForm>
          <span
            className="form__field-name">
            Имя
          </span>
          <input
            className="form__input"/>
          <span
            className="form__field-name">
            E-mail
          </span>
          <input
            className="form__input"/>
          <span
            className="form__field-name">
            Пароль
          </span>
          <input
            className="form__input"/>
        </SignForm>
        <p className="signup__text">Уже зарегистрированы?&nbsp;
        <Link
          className="signin__link"
          to="/signin">
          Войти
        </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
