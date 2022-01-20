// Para MovieList y MovieItem podemos hacer un solo fichero sass, porque se entiende que van a ir siempre unidos. Lo importamos desde MovieList
import MovieItem from "./MovieItem";

const MovieList = (props) => {
  const listHTML = props.moviesData.map((eachMovie) => {
    return (
      <MovieItem
        key={eachMovie.id}
        title={eachMovie.title}
        // Substring para acortar textos largos
        synopsis={eachMovie.synopsis.substring(0, 35)}
      />
    );
  });

  return <ul className="cards">{listHTML}</ul>;
};

export default MovieList;
