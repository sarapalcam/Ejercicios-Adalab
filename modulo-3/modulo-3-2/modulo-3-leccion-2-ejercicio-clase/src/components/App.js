// Imports: enlazamos con otros ficheros:
//  - Librerías JS
//  - CSS / Sass: no necesita un nombre ni el "from"
//  - Imágenes
//  - json (servidor local)
// En esta parte lo más adecuado es que vayan los estilos y los elementos que se van a utilizar en la función App
import '../styles/index.scss';
import '../styles//App.scss';
import papel from '../images/papel.png';
import piedra from '../images/piedra.png';

// Se pueden poner funciones fuera siempre y cuando lo que necesite nuestra función no esté creado dentro de App, por ejemplo, ponerHTML se puede poner antes, pero ponerTexto no

// Función principal
function App() {

  // Variables estado

  //Variables generales
  const deboMostrarTexto = true;

  // Hooks

  // Funciones de eventos

  //Variables o funciones con HTML
  const untrocitoDeHTML = <img src={papel} alt="Imagen" />;

  const ponerHTML = () =>{
    return <img src={piedra} alt="Imagen" />;
  }

   {/*const ponerTexto = (texto) => {
    if (deboMostrarTexto){
      return <p>{texto}</p>;
    } else {
      return null;
    }
  } */}

   {/* Otra forma */}
   const ponerTexto = (texto) => {
   return <p>{texto}</p>;
  }

  return (
    <div className="App">
    {untrocitoDeHTML}
    {ponerHTML()}
    {ponerTexto('Párrafo 1')}
    {/* Otra forma */}
    {deboMostrarTexto ? ponerTexto('Párrafo 2') : null}
    {deboMostrarTexto ? ponerTexto('Párrafo 3') : null}

    </div>
  );
}

// Export

export default App;
