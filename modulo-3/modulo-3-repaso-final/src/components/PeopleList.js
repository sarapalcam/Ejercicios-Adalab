import '../styles/components/PeopleList.scss';
import PeopleListItem from './PeopleListItem';

const PeopleList = ({people, peopleName, selectedCities, gender, peopledetail}) => {

  return (
      <ul className="list" >
          <PeopleListItem people={people}  selectedCities={selectedCities} gender={gender} peopledetail={peopledetail}  peopleName={peopleName}/>
      </ul>
    );
}

export default PeopleList;