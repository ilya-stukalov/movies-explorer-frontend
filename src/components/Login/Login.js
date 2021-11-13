import React from 'react';
import SignForm from '../SignForm/SignForm';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom';
import { useFormValidation } from '../../hooks/useFormValidation';

function Login({ handleLogin }) {

  const {
    handleChange,
    values,
    errors,
    isValid,
  } = useFormValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values);
  }


  return (
    <section className="signin">
      <div className="signin__container">
        <div className="signin__logo">
          <Logo />
        </div>
        <h2
          className="signin__header">Рады видеть!</h2>
        <SignForm
          noValidate={true}
          login={true}
          handleSubmit={handleSubmit}
          isDisabled={!isValid}>
          <span
            className="form__field-name">
            E-mail
          </span>
          <input
            type="email"
            required
            name="email"
            onChange={handleChange}
            className="form__input"
            value={values.email || ''}
            pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"/>
          <span className="form__item-error form__item-error_active">{ errors.email }</span>
          <span
            className="form__field-name">
            Пароль
          </span>
          <input
            name="password"
            type="password"
            minLength="8"
            required
            onChange={handleChange}
            className="form__input"
            value={values.password || ''}/>
          <span className="form__item-error form__item-error_active">{errors.password}</span>
        </SignForm>
        <p className="signin__text">Ещё не зарегистрированы?&nbsp;
          <Link
            className="signup__link"
            to="/signup">
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
