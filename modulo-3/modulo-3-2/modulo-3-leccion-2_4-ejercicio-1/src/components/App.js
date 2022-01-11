import '../styles/index.scss';
import '../styles//App.scss';
import { useState } from 'react';

const App = () => {
  
  const [acc, setCounter] = useState(0);

  const handleCounter = (ev) => {
    let addValue = '';
    let substractValue = '';
    if (ev.currentTarget.classList.contains('btn__add')){
      addValue = acc + 1;
      setCounter(addValue);
    } else if (ev.currentTarget.classList.contains('btn__substract') && acc > 0) {
      substractValue = acc - 1;
      setCounter(substractValue);
    }
}

const handleResetValue = () => {
  let resetValue = 0;
  setCounter(resetValue);
}

  return (
    <div>
      <p>Contador: {acc}</p>
      <button className="btn__add" onClick={handleCounter}>+</button>
      <button className="btn__substract" onClick={handleCounter}>-</button>
      <button onClick={handleResetValue}>Reset</button>
    </div>
  );
};

export default App;