import '../styles/index.scss';
import '../styles//App.scss';
import { useState } from 'react';

// No consigo que al filtar por el contenido de task pueda tachar o destachar cada elemento de la lista. Volver a intentarlo más adelante

function App() {

  const [tasks, setTasks] = useState([
    { 
      task: 'Comprar harina, jamón y pan rallado', 
      completed: true 
   },
    { 
      task: 'Hacer croquetas ricas', 
      completed: true 
    },
    { 
      task: 'Ir a la puerta de un gimnasio', 
      completed: false 
    },
    { 
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', 
      completed: false 
    }
  ]);

  const [inputValue, setInputValue] = useState('');

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

  const renderList = () => {
    return (
      tasks.filter(item => {
        return item.task.toLowerCase().includes(inputValue.toLowerCase());
      })
      // Puede que me falte un filter con los completed para hacer esto, incluso quizás deba crear un nuevo estado
      .map(
        (item, index) => {
            return <li key={index} id={index} className={item.completed ? 'completed' : null} onClick={handleClickCompleted}>{item.task}</li>        
        })
      
      )
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
}

export default App;
