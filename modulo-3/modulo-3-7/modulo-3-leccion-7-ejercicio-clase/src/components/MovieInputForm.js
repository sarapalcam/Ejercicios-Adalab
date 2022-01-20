const MovieInputForm = (props) => {

    const handleChangeInput = (ev) => {
        props.changeForm(props.inputId, ev.currentTarget.value)
      }

  return (
    <div className="col2 mb-1">
      <label className="form__label" htmlFor={props.inputId}>
{props.labelText}      </label>
      <input
        type="text"
        placeholder={props.inputPlaceholder}
        className="form__input-text"
        name={props.inputName}
        id={props.inputId}
        value={props.newTitle}
        onChange={handleChangeInput}
      />
      {/* <div className="form__error">Error</div> */}
    </div>
  );
};

export default MovieInputForm;
