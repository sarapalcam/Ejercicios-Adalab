import '../styles/index.scss';
import '../styles//App.scss';
import { useState } from 'react';

function App() {

  const [pageClass, setPageClass] = useState('');
  // const [linkText, setLinkText] = useState('Modo oscuro');

  const handleClickLink = (ev) => {
    ev.preventDefault();
    if (pageClass === ''){
      setPageClass('dark');
      // setLinkText('Modo claro');
    } else {
      setPageClass('');
      // setLinkText('Modo oscuro');
    }
  }

  //Otro modo sin crear una nueva variable estado. En genral TODO lo que quedamos cambiar de HTML lo guardamos en variables estado, pero a veces (como en este caso) podemos aprovecharnos de otra variable estado y no abusar así de la creación de este tipo de variables
  const linkText = ( pageClass === '' ) ? 'Modo oscuro' : 'Modo claro';

  return (
    <div className={`App ${pageClass}`}>
      <h1>Modo claro / Oscuro</h1>
      <a href="./#" className={pageClass} onClick={handleClickLink}>{linkText}</a>
    </div>
  );
}

export default App;
