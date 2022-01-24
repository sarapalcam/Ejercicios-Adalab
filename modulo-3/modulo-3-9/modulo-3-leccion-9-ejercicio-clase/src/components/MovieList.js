import '../stylesheets/MovieList.scss';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

//El destructuring también se puede hacer así directamente. Es lo mismo que hacer:
    // function MovieList(props) {
    //   const {moviestData} = props;
    //   return loquesea
    // }

function MovieList({moviesData}) {
  const listHTML = moviesData.map((eachMovie) => (
    <MovieItem key={eachMovie.id} movieData={eachMovie}></MovieItem>
  ));

  return (
    <>
      <h2 className="title--medium mt-1 mb-1">Listado de películas</h2>
      {moviesData.length === 0 ? <div><img src="https://gifer.com/es/ZJtI"/><p>Cargando datos...</p> </div>: <ul className="cards">
        {listHTML}
      </ul> }
      
    </>
  );
}

MovieList.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MovieList;
