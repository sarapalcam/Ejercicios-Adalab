function getMovies(value){
  return  fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
 .then(response => response.json())        
};

// Lo normal es que en los ficheros de servicios tengamos varias funciones, por eso creamos un objeto de funciones para exportar ese objeto
const objFunctionsToExport = {
  getMovies: getMovies
}

export default objFunctionsToExport;