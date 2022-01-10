import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
      </header>
      <body>
        <main className="main"> 
          <h1 className="main__title">Esta es mi primera web con React</h1>
          <p className="main__text">Probando React, de momento parece algo bastante extraño. Parece que no funciona como sass usando la nomenclatura BEM y no autocompleta HTML</p>
        </main>
      </body>
    </div>
  );
}

export default App;
