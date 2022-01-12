import '../styles/index.scss';
import '../styles//App.scss';
import { useState } from 'react';

const App = () => {

  const [checkboxStatus, setCheckboxStatus] = useState({
    macarrones: false,
    patatas: false,
    nueces: false,
    huevos: false,
    cebolla: false,
    cerveza: false
  });

  const [message, setMessage] = useState('');

  const handleChangeCheckbox = ev => {
    setCheckboxStatus(ev.currentTarget.checked);
  }
  
  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form className="form" action="">
        <label htmlFor="macarrones">
          <input type="checkbox" id="macarrones" onChange={handleChangeCheckbox}/>
          Macarrones
        </label>
        <label htmlFor="patatas">
          <input type="checkbox" id="patatas" onChange={handleChangeCheckbox} />
          Patatas
        </label>
        <label htmlFor="nueces">
          <input type="checkbox" id="nueces" onChange={handleChangeCheckbox} />
          Nueces
        </label>
        <label htmlFor="huevos">
          <input type="checkbox" id="huevos" onChange={handleChangeCheckbox} />
          Huevos
        </label>
        <label htmlFor="cebolla">
          <input type="checkbox" id="cebolla" onChange={handleChangeCheckbox} />
          Cebolla
        </label>
        <label htmlFor="cerveza">
          <input type="checkbox" id="cerveza" onChange={handleChangeCheckbox} />
          Cerveza
        </label>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default App;