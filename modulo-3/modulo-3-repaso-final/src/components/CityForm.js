const CityForm = ({ cities, selectedCities, handleFilter }) => {
  const handleChangeCity = (ev) => {
    handleFilter({
      key: 'city',
      value: ev.target.value
    });
  };

  const htmlCity = cities.map((eachCity, index) => {
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
