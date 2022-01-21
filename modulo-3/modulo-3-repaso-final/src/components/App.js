import '../styles/index.scss';
import '../styles//App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/fetch';
import Header from './Header';
import Form from './Form';
import PeopleList from './PeopleList';

function App() {
  const [people, setPeople] = useState([]);
  const [city, setCity] = useState([]);
  const [gender, setGender] = useState('');

  useEffect(() => {
    callToApi().then((data) => {
      const filteredData = data.results.map((eachData) => {
        return {
          gender: eachData.gender,
          name: eachData.name,
          city: eachData.location.city,
          age: eachData.dob.age,
          picture: eachData.picture.thumbnail,
          id: eachData.login.uuid,
        };
      });
      setPeople(filteredData);
      const cityFromApi = data.results.map(
        (eachData) => eachData.location.city
      );
      setCity(cityFromApi);
    });
  }, []);

  const changeGender = (value) => {
    if (value === 'female') {
      setGender('female');
    } else if (value === 'male') {
      setGender('male');
    } else {
      setGender('');
    }
  };

  return (
    <div className="App">
      <Header text="Linkedin"></Header>
      <Form city={city} changeGender={changeGender} gender={gender}/>
      <PeopleList people={people} gender={gender}></PeopleList>
    </div>
  );
}

export default App;
