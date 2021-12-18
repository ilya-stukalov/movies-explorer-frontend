import React from 'react';
import SignForm from '../SignForm/SignForm';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom';
import { useFormValidation } from '../../hooks/useFormValidation';

function Register({handleRegistration}) {

  const {
    handleChange,
    values,
    errors,
    isValid,
  } = useFormValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    handleRegistration(values);
  }


  return (
    <section className="signup">
      <div className="signup__container">
        <div className="signup__logo">
          <Logo/>
        </div>
        <h2 className="signup__header">Добро пожаловать!</h2>
        <SignForm
          noValidate={true}
          handleSubmit={handleSubmit}
          isDisabled={!isValid}>
          <span
            className="form__field-name">
            Имя
          </span>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            minLength="2"
            maxLength="30"
            required
            className="form__input"
            value={values.name || ''}/>
          <span className="form__item-error form__item-error_active">{errors.name}</span>
          <span
            className="form__field-name">
            E-mail
          </span>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            required
            className="form__input"
            value={values.email || ''}
            pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"/>
          <span className="form__item-error form__item-error_active">{ errors.email }
          </span>
          <span
            className="form__field-name">
            Пароль
          </span>
          <input
            onChange={handleChange}
            minLength="8"
            required
            type="password"
            name="password"
            className="form__input"
            value={values.password || ''}/>
          <span className="form__item-error form__item-error_active">{errors.password}</span>
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
