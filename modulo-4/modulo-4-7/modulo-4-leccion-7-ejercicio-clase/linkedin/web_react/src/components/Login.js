import React, { useState } from 'react';
import Register from './Register';

const Login = (props) => {
  // state
  const [email, setEmail] = useState('ivan@adalab.es');
  const [password, setPassword] = useState('1234');

  // events
  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    props.handleLogin({
      email: email,
      password: password,
    });
  };

  return (
    <>
      <form className="mb-1" onSubmit={handleFormSubmit}>
        <h2>Bienvenida a nuestra LinkedIn</h2>
        <h3>Entra en nuestra web:</h3>
        <label className="form__label display-block" htmlFor="email">
          Escribe tu email:
        </label>
        <input
          className="form__input-text m-0"
          type="text"
          id="email"
          value={email}
          onChange={handleEmail}
        />
        <label className="form__label display-block" htmlFor="password">
          Escribe tu contraseña:
        </label>
        <input
          className="form__input-text m-0"
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <button className="card__btn m-0 mt-1">Entrar</button>
        {props.loginError}
      </form>

      <Register handleSingUp={props.handleSingUp} />
    </>
  );
};

export default Login;
