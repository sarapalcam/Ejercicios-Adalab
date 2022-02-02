import "../stylesheets/App.scss";
import {useState} from 'react';

function App() {

  const [name, setName] = useState('');

  const handleName = (ev) => {
    setName(ev.currentTarget.value)
  };

  const handleClickFetch = () => {
    fetch(`http://localhost:3001/users?name=${name}`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="App">
      <header>
        <h1>Probando nuestro servidor</h1>
      </header>
      <main>
        <input type="text" name="name" id="name" value={name} onChange={handleName}/>
        <button onClick={handleClickFetch}>Fetch me</button>
      </main>
    </div>
  );
}

export default App;
