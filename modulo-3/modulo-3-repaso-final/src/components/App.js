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
    });
  }, []);

  const getCities = () => {
    const cityFromApi = people.map((eachData) => eachData.city);
    //Set nos crea un nuevo objeto de un array sin los datos repetidos
    const uniqueCities = new Set(cityFromApi);
    const uniqueCitiesArray = [...uniqueCities];
    return uniqueCitiesArray.sort();
  };

  //Así lo hice yo (ya he borrado los de gender y name). Intentar unificar funciones siempre que pueda
  // const selectCity = (checked, id) => {
  //   const findCity = selectedCities.find((eachCity) => eachCity === id);
  //   if (checked) {
  //     setSelectedCities([...selectedCities, id]);
  //   } else {
  //     setSelectedCities(
  //       selectedCities.filter((eachCity) => eachCity !== findCity)
  //     );
  //   }
  // };

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setPeopleName(data.value);
    } else if (data.key === 'gender') {
      setGender(data.value);
    } else if (data.key === 'city') {
      if (selectedCities.includes(data.value)) {
        const newCities = selectedCities.filter(eachCity => eachCity !== data.value);
        setSelectedCities(newCities)
      } else {
       setSelectedCities([...selectedCities, data.value])
      }
    }
  };

  //Dayana ha hecho esto dentro de una función, comparar con lo que he hecho yo
  const routeData = useRouteMatch('/people/:peopleId');
  const peopledetail = routeData !== null ? routeData.params.peopleId : '';

  const getPeopleRoute = () => {
    if (peopledetail) {
      return peopledetail;
    } else {
      return {};
    }
  };

  getPeopleRoute();

  return (
    <div className="App">
      <Header text="AdaLinkedin"></Header>
      <main className="main">
        <Form
          peopleName={peopleName}
          cities={getCities()}
          selectedCities={selectedCities}
          gender={gender}
          handleFilter={handleFilter}
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
