import React from 'react';

function SignForm(props) {

  return (
    props.login ?
      (
        <div className="form">
      <p className="form__text"></p>
      <fieldset className="form__fieldset">
        {props.children}
      </fieldset>
      <button
        className="form__submit signin-submit-button">
        Войти
      </button>
    </div>
      )
      : (
        <div className="form">
        <p className="form__text"></p>
        <fieldset className="form__fieldset">
          {props.children}
        </fieldset>
        <button
          className="form__submit">
          Зарегистрироваться
        </button>
      </div>
      )
  );
}

export default SignForm;
