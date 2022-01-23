import PropTypes from 'prop-types';


const InputGroupText = ({ handleChange, inputId, labelText, inputName, inputPlaceholder, name }) => {
    const handleInputChange = (ev) =>{
        handleChange(ev.currentTarget.value);
    }

  return (
    <div className="input-group-text">
      <label className="label-text" htmlFor={inputId}>
        {labelText}{' '}
      </label>
      <input
        className="input-text"
        type="text"
        name={inputName}
        id={inputId}
        placeholder={inputPlaceholder}
        value={name}
        onChange={handleInputChange}
      />
    </div>
  );
};

InputGroupText.propTypes = {
  handleChange: PropTypes.func,
  inputId: PropTypes.string, 
  labelText: PropTypes.string,
  inputName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  name: PropTypes.string
}

export default InputGroupText;
