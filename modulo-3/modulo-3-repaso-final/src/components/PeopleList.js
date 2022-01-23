import '../styles/components/PeopleList.scss';
import PeopleListItem from './PeopleListItem';

const PeopleList = (props) => {

  return (
      <ul className="list" >
          <PeopleListItem people={props.people}  everyCity={props.everyCity} selectedCities={props.selectedCities} gender={props.gender} peopledetail={props.peopledetail}  />
      </ul>
    );
}



export default PeopleList;