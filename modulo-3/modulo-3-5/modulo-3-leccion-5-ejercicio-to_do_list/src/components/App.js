import '../styles/index.scss';
import '../styles//App.scss';
import localStorage from '../services/localStorage';
import { useState, useEffect } from 'react';

// No consigo que al filtar por el contenido de task pueda tachar o destachar cada elemento de la lista. Volver a intentarlo más adelante

function App() {
  
  const [tasks, setTasks] = useState(localStorage.get('tasks_list', [] ||
    [
    { task: 'Comprar harina, jamón y pan rallado', 
      completed: false },
    { task: 'Hacer croquetas ricas', 
      completed: false },
    { task: 'Ir a la puerta de un gimnasio', 
      completed: false },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', 
      completed: false 
    }
  ]));

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.set('tasks_list', [...tasks]);
  });

  const handleClickCompleted = (ev) => {
    const selectedTask = ev.currentTarget.id;
    tasks[selectedTask].completed = !tasks[selectedTask].completed;
    setTasks([...tasks])

  }

  const handleChangeInput = (ev) => {
    setInputValue(ev.currentTarget.value);
  }

  const handleSubmitForm = ev => {
    ev.preventDefault();
  }

  //NO ME SALE EL ELIMINAR NI EL REASIGNAR ÍNDICES AL ARRAY QUE QUEDA
  const handleClickDelete = (ev) => {
    const selectedTaskId = ev.currentTarget.id;
    console.log(selectedTaskId);
    const findIndex = tasks[selectedTaskId];
    console.log(findIndex);
    const newTasks = tasks.filter(eachTask => eachTask !== findIndex);
    // console.log(newTasks);
    setTasks(newTasks);
  }

  const completedTasks = () => {
    const completedTasks = tasks.filter(task => {
      return task.completed
    });
    return completedTasks.length;
  }

  const uncompletedTasks = () => {
    return tasks.length - completedTasks();
  }

  const renderList = () => {
    return (
      tasks.filter(item => {
        return item.task.toLowerCase().includes(inputValue.toLowerCase());
      })
      .map(
        (item, index) => {
            return <li key={index} id={index} className={item.completed ? 'completed' : null} onClick={handleClickCompleted}><i className="fas fa-trash-alt" id={index} onClick={handleClickDelete}></i>{item.task}</li>        
        })
      
      )
  }

  return (
    <div className="App">
      <h1>Mi lista de tareas</h1>
      <ol>{renderList()}</ol>
      <form action="" onSubmit={handleSubmitForm}>
        <input type="text" name="input-text" id="input-text" value={inputValue} onChange={handleChangeInput}/>
      </form>
      <p>Tareas totales: {tasks.length}</p>
      <p>Tareas completadas: {completedTasks()}</p>
      <p>Tareas pendientes: {uncompletedTasks()}</p>
    </div>
  );
};

export default App;
