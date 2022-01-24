import "../styles/index.scss";
import "../styles//App.scss";
import { useEffect, useState } from "react";
import Header from "./Header";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import PageContact from "./PageContact";
import PageAboutUs from "./PageAboutUs";
import PageList from "./PageList";
import PageAdd from "./PageAdd";

function App() {

  //Ver bien las diferencias entre useRouteMatch y useParams. Aquí se usa esto en App porque (en ele jercicio de Iván) tenemos los datos del id en la variable de estado moviesData. Si necesito los parámetros de App siempre uso useRputeMatch
  const routerData = useRouteMatch('/movie/:movieId');
  const movieId = routerData ? routerData.params.movieId : null;
  //Ver el vídeo de Iván para ver como se hace estoy con un array de pelis. Se comprueba si el id de las pelis coincide con movieId(con un find) y se interpolan los datos en mi Route exact path="/movie/movieId para mostrar más datos de las pelis"
  console.log(routerData);

  return (
    <div className="App">
      <Header text="Adamdb" />

      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="menu__item">
            <Link to="/about-us">Quienes somos</Link>
          </li>
          <li className="menu__item">
            <Link to="/list">Listado de películas</Link>
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
        <Route path="/about-us">
          <PageAboutUs />
        </Route>
        <Route path="/list">
          <PageList />
        </Route>
        <Route path="/add">
          <PageAdd />
        </Route>
        <Route path="/contact">
          <PageContact />
        </Route>
        <Route exact path="/movie/:movieId">
          <p>Detalle de Película con id {movieId}</p>
          <Link to="/list">Volver al listado</Link>
        </Route>
        <Route exact path="/">
          <h2>Bienvenida</h2>
          <p>Esto es una página de películas</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
