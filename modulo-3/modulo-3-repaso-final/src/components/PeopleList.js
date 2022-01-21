import PeopleListItem from './PeopleListItem';

const PeopleList = (props) => {

  return (
      <ul>
          <PeopleListItem people={props.people} gender={props.gender}/>
      </ul>
    );
}



export default PeopleList;