function getMovies(){
  return  fetch('https://beta.adalab.es/pw-recursos/apis/adamdb-v1/books_with_id.json')
 .then(response => response.json())        
};

// Lo normal es que en los ficheros de servicios tengamos varias funciones, por eso creamos un objeto de funciones para exportar ese objeto
const objFunctionsToExport = {
  getMovies: getMovies
}

export default objFunctionsToExport;