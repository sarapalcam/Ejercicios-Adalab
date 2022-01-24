import '../styles/components/Form.scss';
import CityForm from './CityForm';
import GenderForm from './GenderForm';
import NameForm from './NameForm';

const Form = ({
  peopleName,
  changePeopleName,
  selectGender,
  gender,
  everyCity,
  selectedCities,
  selectCity,
}) => {
  return (
    <section className="form">
      <fieldset className="form__name">
        <NameForm
          peopleName={peopleName}
          changePeopleName={changePeopleName}
          labelText="Filtrar por nombre:"
        />
      </fieldset>
      <fieldset className="form__gender">
        <GenderForm selectGender={selectGender} gender={gender} />
      </fieldset>
      <fieldset className="form__city">
        <CityForm
          everyCity={everyCity}
          selectedCities={selectedCities}
          selectCity={selectCity}
        />
      </fieldset>
    </section>
  );
};

export default Form;
