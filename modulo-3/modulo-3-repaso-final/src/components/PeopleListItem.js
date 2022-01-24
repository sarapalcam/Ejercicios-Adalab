import '../styles/components/PeopleList.scss';
import { Link } from 'react-router-dom';

const PeopleListItem = ({
  people,
  peopleName,
  selectedCities,
  gender,
  peopledetail,
}) => {
  const getGender = (genderValue) => {
    return genderValue === 'female' ? 'Mujer' : 'Hombre';
  };

  //Dayana tiene los filter más separaditos, compararlo para cambiarlo a App

  const htmlPeople = people
    .filter((eachPeople) => {
      return eachPeople.name
        .toLocaleLowerCase()
        .includes(peopleName.toLocaleLowerCase());
    })
    .filter((eachPeople) =>
      gender !== ''
        ? eachPeople.gender === gender
        : eachPeople.gender === 'female' || 'male'
    )
    .filter((eachPeople) => {
      //Esto lo hice primero igualandolo o no a [] y no funcionaba, ¿por qué?
      if (selectedCities.length !== 0) {
        if (selectedCities.includes(eachPeople.city)) {
          const foundCity = selectedCities.find(
            (eachCity) => eachCity === eachPeople.city
          );
          return eachPeople.city === foundCity;
        }
      } else if (selectedCities.length === 0) {
        return eachPeople;
      }
    })
    .map((eachPeople) => {
      return (
        <li key={eachPeople.id} className="list__item">
          <Link
            to={`/people/${eachPeople.id}`}
            peopledetail={peopledetail}
            people={people}
          >
            <article className="people">
              <img
                className="people___img"
                src={eachPeople.picture}
                alt={`Imagen de perfil de ${eachPeople.name}`}
              />
              <div className="people__data">
                <p className="people__data--name">{eachPeople.name}</p>
                <p>{eachPeople.city}</p>
                <p>{`${eachPeople.age} años`}</p>
                <p>{getGender(eachPeople.gender)}</p>
              </div>
            </article>
          </Link>
        </li>
      );
    });

  return htmlPeople;
};

export default PeopleListItem;
