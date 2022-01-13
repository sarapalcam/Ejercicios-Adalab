import "../styles/index.scss";
import "../styles//App.scss";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    title: "",
    synopsis: "",
    language: "",
    age: "",
    category: [] //Según la usuaria añada elementos los vamos haciendo push, y si los desmarca hacemos splice. También usaremos el atributo checked pero comprobaremos que en el array esté el valor (con include)  
  });

  const handleSubmitForm = (ev) => {
    ev.preventDefault();
  };

  const handleChangeInput = (ev) => {
    const prop = ev.currentTarget.name; //prop de property. Si utilizamod name y no id, esta función  también me vale para los radio buttons, con el id no se podría
    setData({
      ...data, //Spread operator Esto me coge todos los datos que ya están en el objeto y sólo me cambia lo de abajo, en este caso el elemento del objeto con el mismo nombre que el name de mi currentTarget. También sirve para añadir todos los datos de un objeto a otro, si dentro del segundo pogo ...nombreDelObjetoQueCopio
      [prop]: ev.currentTarget.value,
    });
  };

  const handleClickReset = () => {
    setData({
      title: "",
      synopsis: "",
      language: "",
      age: ""
    });
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Ada MDB</h1>
      </header>
      <main>
        <form action="" onSubmit={handleSubmitForm}>
          <div className="col2 mb-1">
            <label className="form__label" htmlFor="title">
              Título:
            </label>
            <input
              className="form__input--text"
              type="text"
              name="title"
              id="title"
              placeholder="Ej.: E.T."
              value={data.title}
              onChange={handleChangeInput}
            />
          </div>

          <div className="col2 mb-1">
            <label className="form__label" htmlFor="synopsis">
              Sinopsis:
            </label>
            <textarea
              className="form__input--textarea"
              name="synopsis"
              id="synopsis"
              cols="30"
              rows="10"
              placeholder="Ej.: Un extraterrestre viene a la tierra y cambia la vida de Elliot"
              value={data.synopsis}
              onChange={handleChangeInput}
            ></textarea>
          </div>

          <div className="col2 mb-1">
            <label className="form__label" htmlFor="language">
              Idioma:
            </label>
            <select
              className="form__input--select"
              name="language"
              id="language"
              value={data.language}
              onChange={handleChangeInput}
            >
              <option disabled={true} defaultValue value="">
                Escoge una opción
              </option>
              <option value="es">Español</option>
              <option value="cat">Catalán</option>
              <option value="gal">Gallego</option>
              <option value="eus">Euskera</option>
            </select>
          </div>

          <div>
            <label htmlFor="">
              <input type="radio" checked={data.age==='tp'} name="age" value="tp" onChange={handleChangeInput} />
              TP
            </label>
            <label htmlFor="">
              <input type="radio" checked={data.age==='7'} name="age" value="7" onChange={handleChangeInput} /> {/* Con checked={data.age==='7'} obtengo un true o false según el elemento que tenga seleccionado */}
              +7
            </label>
          </div>

         

          <button>Enviar</button>
          <button onClick={handleClickReset}>Borrar</button>
        </form>
      </main>
    </div>
  );
}

export default App;
