import '../styles/index.scss';
import '../styles//App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/fetch';
import Header from './Header';
import Form from './Form';
import PeopleList from './PeopleList';

function App() {
  const [people, setPeople] = useState([]);
  const [everyCity, setEveryCity] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
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
          email: eachData.email,
          registered: eachData.registered.age,
        };
      });
      setPeople(filteredData);
      const cityFromApi = data.results.map(
        (eachData) => eachData.location.city
      );
      setEveryCity(cityFromApi);
    });
  }, []);

  const selectCity = (checked, id) => {
    const findCity = selectedCities.find(eachCity => eachCity === id);
    if (checked) {
      setSelectedCities([...selectedCities, id])
    } else {
      setSelectedCities(selectedCities.filter(eachCity => eachCity !== findCity))
    }
  }

  const selectGender = (value) => {
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
      <main className="main">
        <Form everyCity={everyCity} selectedCities={selectedCities} selectCity={selectCity} selectGender={selectGender} gender={gender}/>
        <PeopleList people={people} everyCity={everyCity} selectedCities={selectedCities} gender={gender}></PeopleList>
      </main>
    </div>
  );
}

export default App;
