import '../stylesheets/App.scss';
import Input from './Input';
import { useState } from 'react';

function App() {
  const [newUserData, setNewUserData] = useState({ username: '', email: '' });

  const handleChangeInput = (name, value) => {
    setNewUserData({ ...newUserData, [name]: value });
  };

  const handleChangeUsername = (ev) => {
    handleChangeInput('username', ev.currentTarget.value);
  }

  const handleChangeEmail = (ev) => {
    handleChangeInput('email', ev.currentTarget.value);
  }

  return (
    <div className='App page'>
      <header className='header'>
        <h1 className='tittle--big mb-1'>Probando ando!</h1>
      </header>
      <main>
        <h2 className='tittle--medium mb-1'>Rellena el formulario</h2>
        <form action=''>
          <ul>
           <li>
            <label className='form__label display-block' htmlFor='username'>
              Nombre de usuario:
              <input
                className='form__input-text'
                type='text'
                name='username'
                id='username'
                value={newUserData.username}
                onChange={handleChangeUsername}
              />
            </label>
          </li>
          <li>
            <label className='form__label display-block' htmlFor='email'>
              Email:
              <input
                className='form__input-text'
                type='text'
                name='email'
                id='email'
                value={newUserData.email}
                onChange={handleChangeEmail}
              />
            </label>
          </li>
          </ul>
          <button>Enviar</button>
        </form>
      </main>
    </div>
  );
}

export default App;
