import { useState, useEffect } from "react";
// import getMovies from "../services/fetchMovies";
import "../stylesheets/App.scss";
import Header from "./Header";
// import MovieList from "./MovieList";
import MovieForm from "./MovieForm";

function App() {

  const [newTitle, setNewTitle] = useState('');
  const [newSynopsis, setNewSynopsis] = useState('');

  // const [moviesData, setMoviesData] = useState([]);

  // useEffect(() => {
  //   getMovies().then((data) => {
  //     setMoviesData(data);
  //   });
  // }, []);

//Intentar hacer esto con una variable data
const changeForm = (name, value) => {
 if (name === 'title'){
   setNewTitle(value);
 } else if (name === 'synopsis'){
  setNewSynopsis(value);
 }
}

  return (
    <div className="App page darkmode">
      <Header text="Listado de pelis" />
      <main>
        <h2 className="title--medium mb-1">Lista de películas</h2>
        {/* <MovieList moviesData={moviesData}/> */}
        <h2 className="title--medium mt-1 mb-1">Añadir película</h2>
        <MovieForm newTitle={newTitle} newSynopsis={newSynopsis} changeForm={changeForm}/>
      </main>
    </div>
  );
}

export default App;
