import { Link } from "react-router-dom";

function MovieDetails(props) {
  return (
    <>
      <p>Detalle de película</p>
      <ul>
        <li>Titulo: {props.movieToShow.title}</li>
        <li>Año: {props.movieToShow.year}</li>
        <li>País: {props.movieToShow.country}</li>
      </ul>
      <Link to="/list">Volver al listado</Link>
    </>
  );
}

//Las default props no nos cogen así los objetos
MovieDetails.defaultProps = {
  movieToShow: {
    title: "N/D",
    year: "N/D",
    country: "N/D",
  },
};

export default MovieDetails;
