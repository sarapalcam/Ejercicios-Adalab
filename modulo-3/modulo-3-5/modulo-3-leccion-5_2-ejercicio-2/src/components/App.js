import '../styles/index.scss';
import '../styles//App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

const App = () => {
  
  const [resultApi, setResultApi] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    callToApi(inputValue).then(response => {
      setResultApi(response);
     });
    },
  [inputValue]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  const handleChangeInput = (ev) => {
    setInputValue(ev.currentTarget.value);
  }
  
  const htmlApi = resultApi.map((eachResult, index) => <li key={index}>{eachResult}</li>);

  return (
    <div>
      <h1>Buscador de series</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="inputText" placeholder="Ej. Better Call Saul" value={inputValue} onChange={handleChangeInput} />
      </form>
        <ul>
        {htmlApi}
        </ul>
    </div>
  );
};

export default App;