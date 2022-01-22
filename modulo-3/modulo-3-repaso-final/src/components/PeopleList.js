import PeopleListItem from './PeopleListItem';

const PeopleList = (props) => {

  return (
      <ul className="list" >
          <PeopleListItem people={props.people}  everyCity={props.everyCity} selectedCities={props.selectedCities} gender={props.gender}/>
      </ul>
    );
}



export default PeopleList;