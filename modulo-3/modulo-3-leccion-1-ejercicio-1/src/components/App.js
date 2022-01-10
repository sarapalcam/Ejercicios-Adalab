import '../styles/main.scss';
import logo from '../images/adalab-logo-155x61.png';

function App() {
  return (
    // SI NO PONGO ESTE DIV NO FUNCIONA, ¿POR QUÉ?
    <div className="App"> 
    <header className="header">
      <a href="https://adalab.es/" target="_blank" rel="noreferrer"
        ><img
          src={logo} 
          alt="Logo de Adalab"
          className="logo"
          title="Logo de Adalab"
      /></a>
      <nav>
        <ul className="menu">
          <li className="menu-item menu-item-blog">
            <a href="https://adalab.es/blog/" target="_blank" rel="noreferrer"> Blog</a>
          </li>
          <li className="menu-item menu-item-contact">
            <a href="https://adalab.es/contacto/" target="_blank" rel="noreferrer"> Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
    <main className="main">
      <section>
      <h1 className="main-title">Creando diversidad digital</h1>
      {/* <img className="logo_link" src="https://beta.adalab.es/resources/images/adalab-logo-128x128.png" title="Página de Adalab" alt="Logo de Adalab" /> */}
      </section>
    </main>
    </div>
  );
}

export default App;
