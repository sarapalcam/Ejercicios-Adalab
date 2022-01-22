const PeopleListItem = (props) => {
  return props.people
  .filter((eachPeople) =>
      props.gender !== ''
        ? eachPeople.gender === props.gender
        : eachPeople.gender === 'female' || 'male'
    )
    .filter((eachPeople) => {
      if (props.selectedCities.length !== 0) {
        if (props.selectedCities.includes(eachPeople.city)) {
          const foundCity = props.selectedCities.find(
            (eachCity) => eachCity === eachPeople.city
          );
          return eachPeople.city === foundCity;
        }
      } else if (props.selectedCities.length === 0) {
        return eachPeople;
      }
    })
    .map((eachPeople) => {
      return (
        <li key={eachPeople.id} className="list__item">
          <article className="people">
            <img
              className="people___img"
              src={eachPeople.picture}
              alt={`Imagen de perfil de ${eachPeople.name}`}
            />
            <div className="people__data">
              <p className="people__data--name">{`${eachPeople.name.title} ${eachPeople.name.first} ${eachPeople.name.last}`}</p>
              <p>{eachPeople.city}</p>
              <p>{`${eachPeople.age} años`}</p>
            </div>
          </article>
        </li>
      );
    });
};

export default PeopleListItem;
