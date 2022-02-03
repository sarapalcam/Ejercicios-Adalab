import '../stylesheets/App.scss';
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(ev) {
    setName(ev.currentTarget.value);
  }

  function handleFetch() {
    fetch(`http://localhost:3001/users?name=${name}`, { method: "GET" })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  return (
    <div className="App">
      <header>
        <h1>
          Probando nuestro servidor
        </h1>
      </header>
      <main>
        <input type="text" value={name} onChange={handleChange}></input>
        <button onClick={handleFetch}>Fetch me</button>
      </main>
    </div>
  );
}

export default App;
