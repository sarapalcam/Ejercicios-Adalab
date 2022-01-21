import CityForm from './CityForm';
import GenderForm from './GenderForm';

const Form = (props) => {
  return (
    <>
      <fieldset>
        <CityForm city={props.city}/>
      </fieldset>
      <fieldset>
        <GenderForm changeGender={props.changeGender} gender={props.gender}/>
      </fieldset>
    </>
  );
};

export default Form;
