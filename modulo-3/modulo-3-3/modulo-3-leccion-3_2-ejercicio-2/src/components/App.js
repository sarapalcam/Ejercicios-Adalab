import '../styles/index.scss';
import '../styles//App.scss';
// Fichero src/components/App.js
import { useState } from 'react';

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [operation, setOperation] = useState('Sumar');

  const handleNumberA = ev => {
    setNumberA(ev.target.value || 0);
  };

  const handleNumberB = ev => {
    setNumberB(ev.target.value || 0);
  };

  const handleOperation = ev => {
    setOperation(ev.currentTarget.value);
  }

    const checkOperation = () => {
    if (operation === 'Sumar'){
      return "sumar"
    } else if (operation === 'Restar'){
      return "restar"
    }else if (operation === 'Multiplicar'){
      return "multiplicar"
    }else if (operation === 'Dividir'){
      return "dividir"
    }
  }

  const doMaths = (a, b) => {
    if (operation === 'Sumar'){
      return a + b
    } else if (operation === 'Restar'){
      return a - b
    }else if (operation === 'Multiplicar'){
      return a * b
    }else if (operation === 'Dividir'){
      return a / b
    }
  }

  const operationName = checkOperation();
  const total = doMaths(parseInt(numberA), parseInt(numberB));

  const handleClickReset = (ev) => {
    setNumberA(0);
    setNumberB(0);
    setOperation('Sumar');
  }

  return (
    <div>
      <h1>La calculadora:</h1>
      <form>
      <select
            className="input-select"
            name="operations"
            id="operations"
            value={operation}
            onChange={handleOperation}
          >
            <option>Sumar</option>
            <option>Restar</option>
            <option>Multiplicar</option>
            <option>Dividir</option>
          </select>
        <label>
          Escribe un número:
          <input type="number" name="name" onChange={handleNumberA} />
        </label>
        <label>
          Escribe otro número:
          <input type="number" name="email" onChange={handleNumberB} />
        </label>
        <button onClick={handleClickReset}>Reset</button>
      </form>
      <p>
        El resultado de {operationName} <strong>{numberA}</strong> y <strong>{numberB}</strong> es 
        <strong> {total}</strong>.
      </p>
    </div>
  );
};

export default App;
