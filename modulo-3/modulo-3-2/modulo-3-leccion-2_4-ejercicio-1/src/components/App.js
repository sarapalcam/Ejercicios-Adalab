import '../styles/index.scss';
import '../styles//App.scss';
import { useState } from 'react';

const App = () => {
  
  const [acc, setCounter] = useState(0);

  const handleCounterAdd = () => {
      let addValue = acc + 1;
      setCounter(addValue);
  }

  const handleCounterSubstract = () => {
    let substractValue = acc - 1;
    setCounter(substractValue);
}

const handleResetValue = () => {
  let resetValue = 0;
  setCounter(resetValue);

}

  return (
    <div>
      <p>Contador: {acc}</p>
      <button onClick={handleCounterAdd}>+</button>
      <button onClick={handleCounterSubstract}>-</button>
      <button onClick={handleResetValue}>Reset</button>
    </div>
  );
};

export default App;