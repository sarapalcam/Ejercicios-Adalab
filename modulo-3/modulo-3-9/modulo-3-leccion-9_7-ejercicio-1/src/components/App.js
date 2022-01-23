import '../styles/index.scss';
import '../styles//App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/fetch';
import Loader from './Loader';

const App = () => {
  
  const [resultApi, setResultApi] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    callToApi.getMovies(inputValue).then(response => {
      setResultApi(response);
      setIsLoading(false)
     });
     console.log(resultApi);
    },
  [inputValue]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  const handleChangeInput = (ev) => {
    setInputValue(ev.currentTarget.value);
  }
  
  const htmlApi = resultApi.map((eachResult, index) => <li key={index}>{eachResult.show.name}</li>);



  return (
    <div>
      <h1>Buscador de series</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="inputText" placeholder="Ej. Better Call Saul" value={inputValue} onChange={handleChangeInput} />
      </form>
        <ul>
          <Loader isLoading={isLoading}></Loader>
        {htmlApi}
        </ul>
    </div>
  );
};

export default App;