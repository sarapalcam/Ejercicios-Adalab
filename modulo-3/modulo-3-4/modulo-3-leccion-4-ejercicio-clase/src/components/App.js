import "../styles/index.scss";
import "../styles//App.scss";
import originalData from "../data/task.json";
import { useState } from "react";

// Podemos modificar el json y añadirle ids, tanto manualmente en el mismo json como desde aquí con un map. Probar a hacer lo del map

// No se debe hacer push a los array en react

// PARA CLONAR ARRAYS: const newData = [...data]

// PARA AÑADIR UN ELEMENTO NUEVO AL ARRAY CLONADO: const newData = [...data, newObject]

function App() {

  // Sólo se nos racarga y pinta bien la página si tenemos variables estado. Todo lo que son datos y nos recargan la página, tienen que ir a variables estado
  const [data, setData] = useState(originalData);
  const [newTask, setNewTask] = useState("");
  const [filterTask, setFilterTask] = useState("");

  const handleChangeFilter =(ev) => {
    setFilterTask(ev.currentTarget.value);
  };

  const handleChangeInput = (ev) => {
    setNewTask(ev.currentTarget.value);
  };

  const handleClickBtn = () => {
    const newObject = {
      id: data.length + 1,
      task: newTask,
      completed: false,
    }
    // React nos impone que no modifiquemos el array de nuestros datos originales, así que lo clonamos y metemos el nuevo objeto en él
    const newData = [...data, newObject]; 
    setData(newData);
    setNewTask('');
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const htmlData = data
    .filter(eachData => eachData.task.includes(filterTask))
    .map((eachData) => (
    <li key={eachData.id} className={eachData.completed ? "completed" : null}>
      {eachData.task}
    </li>
  ));

  return (
    <div className="App">
      <h1>To do list</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Filtrar por nombre:</label>
          <input
            type="text"
            name="filterTask"
            id="filterTask"
            value={filterTask}
            onChange={handleChangeFilter}
          />
      </form>
      <ul>{htmlData}</ul>
      <form action="" onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="newTask"
          id="newTask"
          value={newTask}
          onChange={handleChangeInput}
        />
        <button onClick={handleClickBtn}>Guardar</button>
      </form>
    </div>
  );
}

export default App;
