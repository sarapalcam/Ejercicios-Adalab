import "../styles/index.scss";
import "../styles//App.scss";
import dataMovies from "../services/fetch";
import ls from "../services/localStorage";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(ls.get('movies', []));

  // Para guardar el fetch en localStorage
  useEffect(() => {
    if (data.length === 0){
      dataMovies.getMovies().then((dataFromAPI) => {
        ls.set('movies', dataFromAPI);
        setData(dataFromAPI);
      });
    }
    }
    , []);

  // No funciona, ver qué pasa
  const moviesHTML = data.map((movieData) => (
    <tr key={movieData.id}>
      <td>{movieData.title}</td>
      <td>{movieData.year}</td>
    </tr>
  ));

  return (
    <div className="App">
      <header>
        <h1>Tabla de pelis</h1>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <td>Título</td>
              <td>Año</td>
            </tr>
          </thead>
          <tbody>{moviesHTML}</tbody>
        </table>
      </main>
    </div>
  );
}

export default App;

// APUNTES SOBRE CÓMO FUNCIONA REACT

// function App() {

//  //Solo se pueden crear variables estado al principio del componente App
//   let numero = 0;
//   const [name, setName] = useState('');

//   const handleChangeInput = (ev) => {
//     setName(ev.currentTarget.value);
//     numero = numero +1;
//   }

//   // Con useEffect elijo cuándo quiero que se ejecute mi código y cuántas veces
//   useEffect ( () => {
//     console.log("se ejecuta una vez");
//   } , []);

//   console.log('Ey'); // Se ejecuta cada vez que cambia algo de mi página, en este caso el input
//   console.log(numero); // Siempre sale 0 porque al cambiar el estado del input se vuelve a ejecutar la función App y como número no es constante de estado vuelve a cero. React primero lee lo que va a cambiar y luego vuelve a ejecurar App, por eso va por detrás

//   return (
//     <div className="App">
//       <h1>Hola mundo</h1>
//       <form action="">
//         <input type="text" value={name} onChange={handleChangeInput} />
//       </form>
//     </div>
//   );
// }

// export default App;
