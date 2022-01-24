function MovieFormInput(props) {
  console.log('Nieta');
  console.log(props);

  const handleChangeNewTitle = (ev) => {
    debugger;
    //setNewTitle( ev.currentTarget.value );
    props.changeForm('newTitle', ev.currentTarget.value );
  };

  return (
    <div className="col2 mb-1">
      <label className="form__label" htmlFor="title">
        Título:
      </label>
      <input
        value={props.newTitle}
        onChange={handleChangeNewTitle}
        type="text"
        placeholder="Ej: Die hard"
        className="form__input-text"
        name="title"
        id="title"
      />
      {/* <div className="form__error">Error</div> */}
    </div>
  );
}

export default MovieFormInput;
