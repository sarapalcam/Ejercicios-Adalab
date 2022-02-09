import React, { useState } from 'react';

const Register = (props) => {
  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // events
  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };
  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };
  const handleFormSubmit = (ev) => {
    ev.stopPropagation();
    props.handleSingUp({
      email: email,
      password: password,
    });
  };

  return (
    <form className="mb-1" onSubmit={handleFormSubmit}>
      <h3>Sino tienes cuenta registrate:</h3>
      <label className="form__label display-block" htmlFor="email">
        Escribe tu email:
      </label>
      <input
        className="form__input-text m-0"
        type="text"
        id="email"
        onChange={handleEmail}
      />
      <label className="form__label display-block" htmlFor="password">
        Escribe password:
      </label>
      <input
        className="form__input-text m-0"
        type="text"
        id="password"
        onChange={handlePassword}
      />
      <button className="card__btn m-0 mt-1">Entrar</button>
    </form>
  );
};

export default Register;
