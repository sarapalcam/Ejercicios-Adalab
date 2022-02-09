import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// components

import Login from './Login';
import Register from './Register';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import Filters from './Filters';
// services
//import getApiData from '../services/api';
import api from '../services/api';
import ls from '../services/local-storage';

const App = () => {
  // state
  const cachedContacts = ls.get('contacts', []);

  const [userId, setUserId] = useState(ls.get('userId', ''));
  const [loginError, setLoginError] = useState('');
  const [updateMsj, setUpdateMsj] = useState('');

  const [contacts, setContacts] = useState(cachedContacts);
  const [filterName, setFilterName] = useState(ls.get('filterName', ''));
  const [filterGender, setFilterGender] = useState(ls.get('filterGender', ''));
  const [filterCities, setFilterCities] = useState(ls.get('filterCities', []));
  // effects

  useEffect(() => {
    if (cachedContacts.length === 0) {
      api.getApiData(userId).then((contactsData) => {
        setContacts(contactsData);
      });
    }
  }, [cachedContacts.length]);

  useEffect(() => {
    ls.set('userId', userId);
  }, [userId]);

  useEffect(() => {
    ls.set('contacts', contacts);
  }, [contacts]);

  useEffect(() => {
    ls.set('contacts', contacts);
    ls.set('filterName', filterName);
    ls.set('filterGender', filterGender);
    ls.set('filterCities', filterCities);
  }, [contacts, filterName, filterGender, filterCities]);

  // event handlers
  const handleUpdateContact = (userData) => {
    console.log(userData);
    api.updateContact(userData).then((dataLogin) => {
      console.log(userData);
      if (dataLogin.error) {
        setLoginError(dataLogin.error);
      } else {
        setUpdateMsj(dataLogin.message);
      }
    });
  };

  const handleSingUp = (userData) => {
    api.singUp(userData).then((dataLogin) => {
      console.log(userData);
      if (dataLogin.error) {
        setLoginError(dataLogin.message);
      } else {
        setUserId(dataLogin.userId);
      }
    });
  };

  const handleLogin = (dataLogin) => {
    api.sendLogin(dataLogin).then((dataLogin) => {
      if (dataLogin.error) {
        setLoginError(dataLogin.error);
      } else {
        setUserId(dataLogin.userId);
      }
    });
  };

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    } else if (data.key === 'gender') {
      setFilterGender(data.value);
    } else if (data.key === 'city') {
      if (filterCities.includes(data.value)) {
        const newFilterCities = filterCities.filter(
          (city) => city !== data.value
        );
        setFilterCities(newFilterCities);
      } else {
        filterCities.push(data.value);
        setFilterCities([...filterCities]);
      }
    }
  };

  // render
  const filteredContacts = contacts
    .filter((contact) => {
      return contact.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((contact) => {
      if (filterGender === '') {
        return true;
      } else {
        return contact.gender === filterGender;
      }
      // return filterGender === '' ? true : contact.gender === filterGender
    })
    .filter((contact) => {
      if (filterCities.length === 0) {
        return true;
      } else {
        return filterCities.includes(contact.city);
      }
    });

  const renderContactDetail = (props) => {
    const routeContactId = props.match.params.contactId;
    const foundContact = contacts.find((contact) => {
      return contact.id === parseInt(routeContactId);
    });
    console.log(foundContact);
    if (foundContact !== undefined) {
      return (
        <ContactDetail
          contact={foundContact}
          updateMsj={updateMsj}
          handleUpdateContact={handleUpdateContact}
        />
      );
    } else {
      return <p>Usuaria no encontrada</p>;
    }
  };

  const getCities = () => {
    const contactCities = contacts.map((contact) => contact.city);
    let uniqueCities = [...new Set(contactCities)];
    return uniqueCities;
  };
  return (
    <>
      {userId === '' ? (
        <Login
          handleLogin={handleLogin}
          loginError={loginError}
          handleSingUp={handleSingUp}
        />
      ) : (
        <Switch>
          <Route exact path="/">
            <>
              <header className="header">
                <h1 className="title--big">Directorio de personas</h1>
              </header>
              <div className="col2">
                <Filters
                  filterName={filterName}
                  filterGender={filterGender}
                  filterCities={filterCities}
                  cities={getCities()}
                  handleFilter={handleFilter}
                />
                <ContactList contacts={filteredContacts} />
              </div>
            </>
          </Route>
          <Route path="/contact/:contactId" render={renderContactDetail} />
        </Switch>
      )}
    </>
  );
};

export default App;
