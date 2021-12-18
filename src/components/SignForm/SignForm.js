import React from 'react';

function SignForm({noValidate, handleSubmit, children, login, isDisabled}) {

  return (
    login ?
      (
        <form
          noValidate={noValidate}
          className="form form__container"
          onSubmit={handleSubmit}>
          <p className="form__text"></p>
          <fieldset className="form__fieldset">
        {children}
          </fieldset>
          <button
            disabled={isDisabled}
            type="submit"
            className={isDisabled ? "form__submit signin-submit-button form__submit_inactive" : "form__submit signin-submit-button"}>
            Войти
          </button>
        </form>
      )
      : (
        <form
          noValidate={noValidate}
          className="form form__container"
          onSubmit={handleSubmit}>
        <p className="form__text"></p>
        <fieldset className="form__fieldset">
          {children}
        </fieldset>
        <button
          disabled={isDisabled}
          type="submit"
          className={isDisabled ? "form__submit form__submit_inactive" : "form__submit"}
        >
          Зарегистрироваться
        </button>
      </form>
      )
  );
}

export default SignForm;
