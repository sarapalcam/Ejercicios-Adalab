import '../styles/index.scss';
import '../styles//App.scss';
// Fichero src/components/App.js
import { useState } from 'react';

const App = () => {
  // Estados

  const [series, setSeries] = useState([
    { id: '123', name: 'Juego de tronos' },
    { id: '456', name: 'Las chicas Gilmore' },
    { id: '678', name: 'Gambito de Dama' }
  ]);

  const [favorites, setFavorites] = useState([]);

  const [searchName, setSearchName] = useState('');
  const [searchIsFavorite, setSearchIsFavorite] = useState(false);

  const removeFromFavorites = (serieId) => {
   const favoritesFiltered = favorites.filter(favorite => favorite.id !== serieId);
   return favoritesFiltered
  }

  // Eventos

  const handleFavorite = ev => {
    const clickedSerieId = ev.currentTarget.id;
    const foundSerieInFavorites = favorites.find(favorite => favorite.id === clickedSerieId);
    const foundSerieInList = series.find(serie => serie.id === clickedSerieId);
    if (foundSerieInFavorites === undefined){
      setFavorites([
        ...favorites,
        foundSerieInList])
    } else {
      const favoritesFiltered = removeFromFavorites(clickedSerieId);
      setFavorites(favoritesFiltered)
    }
  };

  const handleSearchName = ev => {
    setSearchName(ev.target.value);
  };

  const handleSearchIsFavorite = ev => {
    setSearchIsFavorite(ev.target.checked);
  };

  // Funciones de renderizado

  const isFavorite = (serieId) => {
    const isFavorite = favorites.find(favorite => favorite.id === serieId);
    if (isFavorite) {
      return 'Sí'
    } else {
      return 'No'
    }
  }

  const renderSeries = () => {
    return (
      series
        // Filtramos por nombre
        .filter(serie => {
          return serie.name.toLowerCase().includes(searchName.toLowerCase());
        })
        // Filtramos por favorito TENGO QUE PENSAR CÓMO HACER AHORA PARA FILTAR POR FAVORITOS
        .filter(serie => {
          if (searchIsFavorite === true) {
            return serie.isFavorite === true;
          } else {
            return true;
          }
        })
        // Mapeamos
        .map(serie => {
          return (
            <li key={serie.id} id={serie.id} onClick={handleFavorite}>
              <h2>{serie.name}</h2>
              <p>Es mi serie favorita: {isFavorite(serie.id)}</p>
            </li>
          );
        })
    );
  };

  return (
    <div>
      <h1>Lista de series:</h1>

      <ul>{renderSeries()}</ul>

      <form>
        <label htmlFor="searchName">Buscar por nombre de serie</label>
        <input
          type="text"
          id="searchName"
          value={searchName}
          onChange={handleSearchName}
        />
        <label htmlFor="searchIsFavorite">Mostrar solo las favoritas</label>
        <input
          type="checkbox"
          id="searchIsFavorite"
          checked={searchIsFavorite}
          onChange={handleSearchIsFavorite}
        />
      </form>
    </div>
  );
};

export default App;