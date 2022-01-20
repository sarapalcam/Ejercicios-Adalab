import MovieInputForm from "./MovieInputForm";

const MovieForm = (props) => {
  return (
    <form action="" className="form">
      <MovieInputForm
        newTitle={props.newTitle}
        changeForm={props.changeForm}
        labelText="Título_"
        inputId="title"
        inputName="title"
        inputPlaceholder="Ej: Die hard"
      />
      <MovieInputForm
        newSynopsis={props.newSynopsis}
        changeForm={props.changeForm}
        labelText="Sinopsis:"
        inputId="synopsis"
        inputName="synopsis"
        inputPlaceholder="Érase una vez..."
      />
      <button>Guardar</button>
    </form>
  );
};

export default MovieForm;
