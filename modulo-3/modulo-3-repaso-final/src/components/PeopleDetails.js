import '../styles/components/PeopleDetails.scss';

import { Link } from 'react-router-dom';

const PeopleDetails = (props) => {

    const findPeople = props.people.find(eachPeople => eachPeople.id === props.peopledetail);

  return (
    <article className="people__detail">

      <h2>Más info de {`${findPeople.name.title} ${findPeople.name.first} ${findPeople.name.last}`}</h2>
          <img
            className="people___img"
            src={findPeople.picture}
            alt={`Imagen de perfil de ${findPeople.name}`}
          />
          <div className="people__data">
            <p className="people__data--name">{`${findPeople.name.title} ${findPeople.name.first} ${findPeople.name.last}`}</p>
            <p>{findPeople.city}</p>
            <p>{`${findPeople.age} años`}</p>
            <p>{findPeople.email}</p>
            <p>{`Con nosotros desde ${2022 - findPeople.registered}`}</p>
            <Link to='/'><button>Volver al listado</button></Link>
          </div>
        </article> 

    );
}

export default PeopleDetails;