const CityForm = (props) => {

  const handleChangeCity = (ev) => {
    props.selectCity(ev.currentTarget.checked, ev.currentTarget.id);
  }

  const htmlCity = props.everyCity.map((eachCity, index) => {
    return (
      <div key={index} className="selecy__city">
        <label htmlFor={eachCity}>
          <input
            id={eachCity}
            type="checkbox"
            value={eachCity}
            name="cityOptions"
            checked={props.selectedCities.includes(eachCity)}
            onChange={handleChangeCity}
          />
          {eachCity}
        </label>
      </div>
    );
  });

  return (
    <>
      <h3> Selecciona una ciudad</h3>
      {htmlCity}
    </>
  );
};

export default CityForm;

