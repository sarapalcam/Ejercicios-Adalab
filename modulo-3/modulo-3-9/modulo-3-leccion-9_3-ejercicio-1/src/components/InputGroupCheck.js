const InputGroupCheck = props => {

    const handleInputChange = ev => {
        props.handleChange(ev.target.checked)
    }

    return (
        <div className="input-group-checkbox">
        <label className="label-check" htmlFor={props.inputId}>
          {props.labelText}
        </label>
        {/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
        <input
          type="checkbox"
          name={props.inputName}
          id={props.inputId}
          checked={props.legalTerms}
          onChange={handleInputChange}
        />
      </div>
    )
}

export default InputGroupCheck;