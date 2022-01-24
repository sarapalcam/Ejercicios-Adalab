import '../styles/index.scss';
import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/fetch';
import Header from './Header';
import Form from './Form';
import PeopleList from './PeopleList';
import PeopleDetails from './PeopleDetails';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

function App() {
  const [people, setPeople] = useState([]);
  const [everyCity, setEveryCity] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [gender, setGender] = useState('');
  const [peopleName, setPeopleName] = useState('');

  useEffect(() => {
    callToApi().then((data) => {
      const filteredData = data.results.map((eachData) => {
        //Es mejor limpiar los datos de la api en su propio archivo para dejar este componente más limpio
        return {
          gender: eachData.gender,
          name: `${eachData.name.title} ${eachData.name.first} ${eachData.name.last}`,
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
    const findCity = selectedCities.find((eachCity) => eachCity === id);
    if (checked) {
      setSelectedCities([...selectedCities, id]);
    } else {
      setSelectedCities(
        selectedCities.filter((eachCity) => eachCity !== findCity)
      );
    }
  };

  //Probar a juntar las funciones para cambiar el nombre y el género en una sola, los ifs de gender quizás pueda incluirlos en el filter 
  const changePeopleName = (value) => {
    setPeopleName(value)
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

  const routeData = useRouteMatch('/people/:peopleId');
  const peopledetail = routeData !== null ? routeData.params.peopleId : '';
  
  const getPeopleRoute = () => {
    if (peopledetail) {
      return peopledetail
    } else {
      return {}
    }
  }

  getPeopleRoute();

  return (
    <div className="App">
      <Header text="AdaLinkedin"></Header>
      <main className="main">
        <Form
        peopleName={peopleName}
        changePeopleName={changePeopleName}
          everyCity={everyCity}
          selectedCities={selectedCities}
          selectCity={selectCity}
          selectGender={selectGender}
          gender={gender}
        />
        <Switch>
          <Route exact path="/">
            <PeopleList
              people={people}
              peopleName={peopleName}
              selectedCities={selectedCities}
              gender={gender}
            ></PeopleList>
          </Route>
          <Route path="/people/:peopleId">
            <PeopleDetails peopledetail={peopledetail} people={people} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
