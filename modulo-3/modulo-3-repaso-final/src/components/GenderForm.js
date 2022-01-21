const GenderForm = (props) => {

  const handleChangeGender = (ev) => {
    props.changeGender(ev.currentTarget.value);
  };

  return (
    <form action="">
      <select id="gender" name="gender" value={props.gender} onChange={handleChangeGender}>
      <option value="female">Mujeres y hombres</option>
        <option value="female">Mujeres</option>
        <option value="male">Hombres</option>
      </select>
    </form>
  );
};

export default GenderForm;
