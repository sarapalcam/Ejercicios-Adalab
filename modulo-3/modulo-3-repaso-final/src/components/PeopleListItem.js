const PeopleListItem = (props) => {
  return (
      props.people.filter(eachPeople => props.gender !== '' ? eachPeople.gender === props.gender : eachPeople.gender === "female" || "male" )
      .map( eachPeople => {
          return <li key={eachPeople.id}>
          <article>
            <img
              src={eachPeople.picture}
              alt={`Imagen de perfil de ${eachPeople.name}`}
            />
            <p>{`${eachPeople.name.title} ${eachPeople.name.first} ${eachPeople.name.last}`}</p>
            <p>{eachPeople.city}</p>
            <p>{`${eachPeople.age} años`}</p>
          </article>
        </li>
      })
  
  );
};

export default PeopleListItem;
