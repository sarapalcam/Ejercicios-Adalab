const InputGroupText = (props) => {
    const handleInputChange = (ev) =>{
        props.handleChange(ev.currentTarget.value);
    }

  return (
    <div className="input-group-text">
      <label className="label-text" htmlFor={props.inputId}>
        {props.labelText}{' '}
      </label>
      <input
        className="input-text"
        type="text"
        name={props.inputName}
        id={props.inputId}
        placeholder={props.inputPlaceholder}
        value={props.name}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputGroupText;
