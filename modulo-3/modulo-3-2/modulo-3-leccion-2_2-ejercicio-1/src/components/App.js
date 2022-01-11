import '../styles/App.css';

function App() {
  const pressedKey = (ev) => {
    ev.preventDefault();
    const inputValue = ev.key;
    console.log(inputValue);
  }
  return (
    <div className="App">
      <input type="text" onKeyUp={pressedKey}/>
    </div>
  )
}

export default App;
