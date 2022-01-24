import MovieFormInput from "./MovieFormInput";

function MovieForm(props) {
  console.log('Madre');
  console.log(props);

  const handleChangeNewSynopsis = (ev) => {
    //setNewSynopsis( ev.currentTarget.value );
    props.changeForm('newSynopsis', ev.currentTarget.value );
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('Holi!');
  }

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <MovieFormInput changeForm={props.changeForm} newTitle={props.newTitle}></MovieFormInput>
      <div className="col2 mb-1">
        <label htmlFor="synopsis">Sinopsis:</label>
        <textarea value={props.newSynopsis} onChange={handleChangeNewSynopsis} placeholder="Érase una vez..." name="synopsis" id="synopsis"></textarea>
        {/* <div className="form__error">Error</div> */}
      </div>
      <button>Guardar</button>
    </form>
  );
}

export default MovieForm;
