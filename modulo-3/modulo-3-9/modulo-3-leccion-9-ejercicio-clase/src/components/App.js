import { useState, useEffect } from 'react';
import getMoviesFromApis from '../services/fetchMovies';
import '../stylesheets/App.scss';
import HeaderAdalab from './HeaderAdalab';
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import PageContact from './PageContact';
import PageAboutUs from './PageAboutUs';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

function App() {
  /*   const [newTitle, setNewTitle] = useState('');
  const [newSynopsis, setNewSynopsis] = useState('');

  const changeForm = (name, value) => {
    if (name === 'newTitle') {
      setNewTitle(value);
    } else if (name === 'newSynopsis') {
      setNewSynopsis(value);
    }
  };
*/
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    getMoviesFromApis().then((data) => {
      setMoviesData(data);
    });
  }, []);


  const routerData = useRouteMatch('/movie/:movieId');
  console.log(routerData);
  const movieId = routerData!==null ? routerData.params.movieId : null;
  const movieToShow = moviesData.find( (eachMovie) => eachMovie.id === movieId );



  return (
    <div className="App page darkmode">
      <HeaderAdalab text="Adamdb!" />

      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="menu__item">
            <Link to="/about-us">Quienes somos</Link>
          </li>
          <li className="menu__item">
            <Link to="/list">Listado</Link>
          </li>
          <li className="menu__item">
            <Link to="/add">Añade una</Link>
          </li>
          <li className="menu__item">
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/about-us">
          <PageAboutUs></PageAboutUs>
        </Route>
        <Route exact path="/list">
          <MovieList moviesData={moviesData}></MovieList>
        </Route>
        <Route exact path="/add"></Route>
        <Route exact path="/contact">
          <PageContact></PageContact>
        </Route>
{/*
/movie/d7e4fcf9-9cd0-4a0c-be8d-8bd03a096d5e
/movie/2b66e1ae-606e-4cce-a896-e82e6f05677e
/movie/91611b17-a466-4948-b3b1-4b17158c0521
/movie/:movieId
*/}
        <Route exact path="/movie/:movieId">
          <MovieDetails movieToShow={movieToShow}></MovieDetails>
        </Route>

        <Route exact path="/">
          <>
            <h2>Bienvenida!</h2>
            <p>Esto es una página de película.</p>
          </>
        </Route>
      </Switch>

      {/*       <a href="https://google.es">Ir a Google</a><br/>
      <Link to="/patata">Ir a Patata</Link><br/>
      <Link to="/patata/frita">Ir a Patata frita</Link><br/>
      <Link to="/patata/en/tortilla">Ir a Patata en tortilla</Link><br/>
      <Switch>
      <Route exact path="/patata/en/tortilla">
          <p>
            Me encanta la tortilla
            <Link to="/">Volver</Link>
          </p>
        </Route>
        <Route exact path="/patata">
          <p>
            Patata
            <Link to="/">Volver</Link>
          </p>
        </Route>
        <Route exact path="/">
          <p>
            Raíz
            
          </p>
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
