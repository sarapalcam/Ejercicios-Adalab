import '../styles/index.scss';
import '../styles//App.scss';
import { useState } from 'react';

// Cada dato tiene que ir en variables estado, son datos y queremos guardarlos

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

// COMO LO TIENE MARA 
// import { useState } from 'react';

// function App() {
//   /* Let's do magic! 🦄🦄🦄 */

//   const getTitle = (text) => <h1>{text}</h1>;

//   const [macarrones, setMacarrones] = useState(false);
//   const [patatas, setPatatas] = useState(false);
//   const [nueces, setNueces] = useState(false);
//   const [huevos, setHuevos] = useState(false);
//   const [cebolla, setCebolla] = useState(false);
//   const [cerveza, setCerveza] = useState(false);

//   const handleCheckbox = (event) => {
//     const id = event.currentTarget.id;
//     if (id === 'macarrones') {
//       setMacarrones(event.currentTarget.checked);
//     } else if (id === 'patatas') {
//       setPatatas(event.currentTarget.checked);
//     } else if (id === 'nueces') {
//       setNueces(event.currentTarget.checked);
//     } else if (id === 'huevos') {
//       setHuevos(event.currentTarget.checked);
//     } else if (id === 'cebolla') {
//       setCebolla(event.currentTarget.checked);
//     } else {
//       setCerveza(event.currentTarget.checked);
//     }
//   };

//   const getMessage = () => {
//     let message = '';
//     if (!macarrones && patatas && !nueces && huevos && cebolla && !cerveza) {
//       message = 'Eres una persona concebollista';
//     } else if (
//       !(macarrones || patatas || nueces || huevos || cebolla || cerveza)
//     ) {
//       message = '';
//     } else {
//       message = 'Eres un robot sin paladar';
//     }
//     return message;
//   };

//   return (
//     // HTML ✨

//     <div className="app">
//       {getTitle('Eres un bot o una persona')}

//       <h2>Selecciona los ingredientes de la tortilla de patatas</h2>

//       <input
//         type="checkbox"
//         name="macarrones"
//         id="macarrones"
//         onChange={handleCheckbox}
//       />
//       <label htmlFor="macarrones">Macarrones</label>

//       <input
//         type="checkbox"
//         name="patatas"
//         id="patatas"
//         onChange={handleCheckbox}
//       />
//       <label htmlFor="patatas">Patatas</label>

//       <input
//         type="checkbox"
//         name="nueces"
//         id="nueces"
//         onChange={handleCheckbox}
//       />
//       <label htmlFor="nueces">Nueces</label>

//       <input
//         type="checkbox"
//         name="huevos"
//         id="huevos"
//         onChange={handleCheckbox}
//       />
//       <label htmlFor="huevos">Huevos</label>

//       <input
//         type="checkbox"
//         name="cebolla"
//         id="cebolla"
//         onChange={handleCheckbox}
//       />
//       <label htmlFor="cebolla">Cebolla</label>

//       <input
//         type="checkbox"
//         name="cerveza"
//         id="cerveza"
//         onChange={handleCheckbox}
//       />
//       <label htmlFor="cerveza">Cerveza</label>

//       <p>{getMessage()}</p>
//     </div>
//   );
// }

// export default App;