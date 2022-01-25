import '../styles/components/Form.scss';
import CityForm from './CityForm';
import GenderForm from './GenderForm';
import NameForm from './NameForm';

const Form = ({
  peopleName,
  gender,
  cities,
  selectedCities,
  handleFilter,
}) => {
  return (
    <section className="form">
      <fieldset className="form__name">
        <NameForm
          peopleName={peopleName}
          labelText="Filtrar por nombre:"
          handleFilter={handleFilter}
        />
      </fieldset>
      <fieldset className="form__gender">
        <GenderForm gender={gender} handleFilter={handleFilter} />
      </fieldset>
      <fieldset className="form__city">
        <CityForm
          cities={cities}
          selectedCities={selectedCities}
          handleFilter={handleFilter}

        />
      </fieldset>
    </section>
  );
};

export default Form;
