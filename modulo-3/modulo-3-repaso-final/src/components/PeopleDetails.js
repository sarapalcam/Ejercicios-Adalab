import '../styles/components/PeopleDetails.scss';

import { Link } from 'react-router-dom';

const PeopleDetails = ({people, peopledetail}) => {

    const findPeople = people.find(eachPeople => eachPeople.id === peopledetail);
//Si findPeople es undefined podemos retornar un html de usuario no encontrado. Para que al recargar la pagina de usuario siga apareciendo, hay que usar local storage: 1) guardar datos de la api, antes verificamos si hay algo en el local storage, y si hay es lo que tendremos en el array de people. Ver el vídeo
  return (
    <article className="people__detail">

      <h2>Más info de {findPeople.name}</h2>
          <img
            className="people___img"
            src={findPeople.picture}
            alt={`Imagen de perfil de ${findPeople.name}`}
          />
          <div className="people__data">
            <p className="people__data--name">{findPeople.name}</p>
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