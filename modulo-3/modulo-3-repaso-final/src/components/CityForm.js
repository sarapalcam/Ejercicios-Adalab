const CityForm = ({everyCity, selectedCities, selectCity}) => {

  const handleChangeCity = (ev) => {
    selectCity(ev.currentTarget.checked, ev.currentTarget.id);
  }

  const htmlCity = everyCity.map((eachCity, index) => {
    return (
      <div key={index} className="select__city">
        <label htmlFor={eachCity} className="select__city--option">
          <input
            id={eachCity}
            type="checkbox"
            value={eachCity}
            name="cityOptions"
            checked={selectedCities.includes(eachCity)}
            onChange={handleChangeCity}
          />
          {eachCity}
        </label>
      </div>
    );
  });

  return (
    <>
      <h3 className="select__city--label"> Selecciona una ciudad</h3>
      {htmlCity}
    </>
  );
};

export default CityForm;

