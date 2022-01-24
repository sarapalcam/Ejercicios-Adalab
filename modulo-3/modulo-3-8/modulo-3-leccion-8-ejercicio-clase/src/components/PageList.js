import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PageList = () => {
  return (
    <>
      <h2>Listado de pelis</h2>
      <ul>
        <li>
          <p>Peli 1</p>
          <Link to="/movie/1">Más info</Link>
        </li>
        <li>
          <p>Peli 2</p>
          <Link to="/movie/2">Más info</Link>
        </li>
        <li>
          <p>Peli 3</p>
          <Link to="/movie/3">Más info</Link>
        </li>
        <li>
          <p>Peli 4</p>
          <Link to="/movie/4">Más info</Link>
        </li>
        <li>
          <p>Peli 5</p>
          <Link to="/movie/5">Más info</Link>
        </li>
        <li>
          <p>Peli 6</p>
          <Link to="/movie/6">Más info</Link>
        </li>
      </ul>
    </>
  );
};

export default PageList;
