//El archivo scss de reset se puede importar aquí o en el index.html, los de variables hayque llamarlos en todos los componentes, y en cada componente los estilos de su componente
import { useState, useEffect } from "react";
import getMovies from "../services/fetchMovies";
import "../stylesheets/App.scss";
import Header from "./Header";
import Counter from "./Counter";
import MovieList from "./MovieList";

function App() {
  // Las variables estado se suelen dejar en App, lo veremos con el lifting
  const [counter, setCounter] = useState(0);
  const [moviesData, setMoviesData] = useState([]);

  // Es buena práctica que los useEffect estén también en App porque entre hermanos no hay comunicación, por eso siempre tienen que estar los datos en la madre, en App, y pasarlos por props a las hijas
  useEffect(() => {
    getMovies().then((data) => {
      setMoviesData(data);
    });
  }, []);

  const handleClickCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App page darkmode">
      {/* Si escribimos el nombre de la etiqueda y damos a enter, se nos crea automáticamente el import */}
      <Header text="Listado de pelis" />
      {/* React crea un objeto props que luego toma el componente:
      props = {
        text: "Listado de pelis"
      } */}

      {/* Ejemplo de llevar una variable estado a un componente */}
      <Counter counter={counter} />
      <button onClick={handleClickCounter}>Incrementar</button>

      <main>
        <h2 className="title--medium mb-1">Lista de películas</h2>
        {/* Para pintar listados normalmentes se usan dos compoentes, uno para todo el listado y otro para los items */}
        <MovieList moviesData={moviesData}/>
        <h2 className="title--medium mt-1 mb-1">Añadir película</h2>
        <form action="" className="form">
          <div className="col2 mb-1">
            <label className="form__label" htmlFor="title">
              Título:
            </label>
            <input
              type="text"
              placeholder="Ej: Die hard"
              className="form__input-text"
              name="title"
              id="title"
            />
            <div className="form__error">Error</div>
          </div>
          <div className="col2 mb-1">
            <label htmlFor="synopsis">Sinopsis:</label>
            <textarea
              placeholder="Érase una vez..."
              name="synopsis"
              id="synopsis"
            ></textarea>
            <div className="form__error">Error</div>
          </div>
          <button>Guardar</button>
        </form>
      </main>
    </div>
  );
}

export default App;
