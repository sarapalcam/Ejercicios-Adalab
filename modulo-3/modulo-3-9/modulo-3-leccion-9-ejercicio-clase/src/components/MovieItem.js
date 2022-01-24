import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MovieItem(props) {

  //Para el destructuring en arrays podemos poner el nombre que queramos, simplemente se sigue el orden:
    // Ej. const a = [1, 2, 3]
    // const [patata, pimiento, patata] = a
    // console.log(patata) -> Consoleará 1
  //En objetos sí que hay que utilizar el nombre del parámentro del objeto para hacer el destructuring
  const {title, synopsis, id} = props.movieData;

  return (
    <li className="card">
      <article className="card__info">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{synopsis}..</p>
        <Link className="card__link" to={`/movie/${id}`}>Más info</Link>
      </article>
    </li>
  );
}

//Con shape especificamos las propiedades que tiene que tener el objeto que recibimos
MovieItem.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })
}

export default MovieItem;
