import '../styles/index.scss';
import '../styles//App.scss';
import { useState } from 'react';

// COMO LO HICE YO
/*const App = () => {
  const [acc, setCounter] = useState(0);
  const handleCounter = (ev) => {
    let addValue = '';
    let substractValue = '';
    if (ev.currentTarget.classList.contains('btn__add')){
      addValue = acc + 1;
      setCounter(addValue);
    } else if (ev.currentTarget.classList.contains('btn__substract') && acc ) {
      substractValue = acc - 1;
      setCounter(substractValue);
    }
}
const handleResetValue = () => {
  const resetValue = 0;
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
export default App;*/

//COMO LO HIZO IVÁN EN CLASE
const App = () => {
  
  // let counterOld = 0;

  // En useState fijamos el primer valor que queremos que tenga nuestra variable
  // Con las variables estado siempre es mejor usar const
  const [counter, setCounter] = useState(0);

  const handleClickBtn = (ev) => {
    ev.preventDefault();
    // counterOld++;
    setCounter(counter + 1); // Es como si hiciéramos counter = counter + 1
    // Si hacemos console.log de counter va "atrasado", setCounter no cambia en el momento el valor de counter, si no que lo guarda y lo usa después. Podemos hacerlo instantáneamente si antes declaramos una constante cuyo valor sea counter + 1
  }

  const handleClickReset = (ev) =>{
    ev.preventDefault();
    setCounter(0); // Es como si hiciéramos counter = 0
  }

  return (
    <div>
      {/* No es buena práctica meter funciones en el HTML, igual que no era buena práctica meter styles en el HTML. Mejor separar código HTML, CSS y JS siempre */}
      <h1>Contador</h1>
      <form action="">
        <input className="form__input--text" type="text" value={counter}/>
        <button className="form__btn" onClick={handleClickBtn}>Incrementar</button>
        <button className="form__btn" onClick={handleClickReset}>Reset</button>
      </form>      
    </div>
  );
};

export default App;