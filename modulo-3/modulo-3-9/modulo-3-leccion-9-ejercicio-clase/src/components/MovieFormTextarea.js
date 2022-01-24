function MovieFormTextarea(props) {
  // Nos llega por props:
  //  - props.newSynopsis
  //  - props.changeForm

  const handleChangeNewSynopsis = (ev) => {
    // Tenemos que hacer un setNewSynopsis( ev.currentTarget.value );
    // pero setNewSynopsis() está en App (¡la abuela!)

    props.changeForm('newSynopsis', ev.currentTarget.value );
  };

  return (
    <div className="col2">
      <label className="form__label" htmlFor="newSynopsis">Sinopsis:</label>
      <textarea
        value={props.newSynopsis}
        onChange={handleChangeNewSynopsis}
        placeholder="Érase una vez..."
        name="newSynopsis"
        id="newSynopsis"
      ></textarea>
    </div>
  );
}

export default MovieFormTextarea;
