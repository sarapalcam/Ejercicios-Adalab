import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactDetail = (props) => {
  // state
  const [name, setName] = useState(props.contact.name);
  const [email, setEmail] = useState(props.contact.email);
  const [gender, setGender] = useState(props.contact.gender);
  const [id] = useState(props.contact.id);
  // events
  const handleName = (ev) => {
    setName(ev.target.value);
  };
  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };
  const handleGender = (ev) => {
    setGender(ev.target.value);
  };
  const handleFormSubmit = (ev) => {
    ev.stopPropagation();
    props.handleUpdateContact({
      name: name,
      email: email,
      gender: gender,
      id: id,
    });
  };
  return (
    <div className="card">
      <Link to="/">Volver al inicio</Link>
      <form onSubmit={handleFormSubmit}>
        <header>
          <h2>{props.contact.name}</h2>
        </header>
        <section>
          <img
            className="card__img"
            src={props.contact.image}
            alt={props.contact.name}
          />

          <label className="form__label display-block" htmlFor="name">
            Nombre:
          </label>
          <input
            className="form__input-text m-0"
            type="text"
            id="name"
            onChange={handleName}
            value={name}
          />

          <label className="form__label display-block" htmlFor="email">
            Email:
          </label>
          <input
            className="form__input-text m-0"
            type="text"
            id="email"
            onChange={handleEmail}
            value={email}
          />
          <label className="form__label display-block" htmlFor="gender">
            Genero:
          </label>
          <input
            className="form__input-text m-0"
            type="text"
            id="gender"
            onChange={handleGender}
            value={gender}
          />
          <button className="card__btn m-0 mt-1">MODIFICAR</button>
          {props.updateMsj}
        </section>
      </form>
    </div>
  );
};

export default ContactDetail;
