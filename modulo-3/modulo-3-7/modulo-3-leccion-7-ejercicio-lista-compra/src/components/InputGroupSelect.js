const InputGroupSelect = (props) => {
  const handleInputChange = (ev) => {
    props.handleChange(ev.currentTarget.value);
  };

  return (
    <div className="input-group-select">
      <label className="label-text" htmlFor={props.inputId}>
        {props.labelText}{' '}
      </label>
      <select
        className="input-select"
        name={props.inputName}
        id={props.inputId}
        value={props.region}
        onChange={handleInputChange}
      >
        <option>España peninsular</option>
        <option>Islas Canarias</option>
        <option>Islas Baleares</option>
        <option>Ceuta</option>
        <option>Melilla</option>
      </select>
    </div>
  );
};

export default InputGroupSelect;
