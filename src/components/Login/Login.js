import React from 'react';
import SignForm from '../SignForm/SignForm';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom';

function Login() {
  const [loginForm, setLoginForm] = React.useState(true);

  return (
    <section className="signin">
      <div className="signin__container">
        <div className="signin__logo">
          <Logo />
        </div>
        <h2
          className="signin__header">Рады видеть!</h2>
        <SignForm
          login={loginForm}>
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
