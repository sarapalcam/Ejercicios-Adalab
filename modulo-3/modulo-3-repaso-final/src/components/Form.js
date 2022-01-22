import CityForm from './CityForm';
import GenderForm from './GenderForm';

const Form = (props) => {
  return (
    <section className="form">
     <fieldset>
        <GenderForm selectGender={props.selectGender} gender={props.gender}/>
      </fieldset>
      <fieldset>
        <CityForm everyCity={props.everyCity} selectedCities={props.selectedCities} selectCity={props.selectCity}/>
      </fieldset>
     
    </section>
  );
};

export default Form;
