// Para MovieList y MovieItem podemos hacer un solo fichero sass, porque se entiende que van a ir siempre unidos. Lo importamos desde MovieList

const MovieItem = (props) => {
    return  <li className="card">
    <h3 className="card__title">{props.title}</h3>
    <p className="card__description">{props.synopsis}</p>
  </li>
}

export default MovieItem;

