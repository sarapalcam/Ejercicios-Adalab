import '../styles/index.scss';
import '../styles//App.scss';
import localStorage from '../services/localStorage';
import { useState, useEffect } from 'react';

// No consigo que al filtar por el contenido de task pueda tachar o destachar cada elemento de la lista. Volver a intentarlo más adelante

function App() {
  
  const [tasks, setTasks] = useState(
    [
    { task: 'Comprar harina, jamón y pan rallado', 
      completed: false ,
      id: 0
    },
    { task: 'Hacer croquetas ricas', 
      completed: false,
      id: 1 
    },
    { task: 'Ir a la puerta de un gimnasio', 
      completed: false,
      id: 2 
    },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', 
      completed: false,
      id: 3 
    }
  ]);



  const [inputValue, setInputValue] = useState('');
  const [inputAdd, setInputAdd] = useState({
    task: '',
    completed: false,
    id: ''
  });

  useEffect(() => {
    localStorage.set('tasks_list', [...tasks]);
  }, []);

  const handleClickCompleted = (ev) => {
    const selectedTask = ev.currentTarget.id;
    tasks[selectedTask].completed = !tasks[selectedTask].completed;
    setTasks([...tasks])

  }

  const handleChangeInput = (ev) => {
    setInputValue(ev.currentTarget.value);
  }

  const handleChangeInputAdd = (ev) => {
      setInputAdd({
        ...inputAdd,
        task: ev.currentTarget.value,
        id: ev.currentTarget.id
      }
        );
  }

  const handleClickAdd = () => {
    const addNewTask = [...tasks, inputAdd];
    setTasks(addNewTask); 
    setInputAdd({
      task: '',
      completed: false
    });
  }

  const handleSubmitForm = ev => {
    ev.preventDefault();
  }

  //NO ME SALE EL ELIMINAR NI EL REASIGNAR ÍNDICES AL ARRAY QUE QUEDA
  const handleClickDelete = (ev) => {
    // debugger;
    const selectedTaskId = ev.currentTarget.id;
    console.log(selectedTaskId);
    const findTaskId = tasks.find((task) => task.id === parseInt(selectedTaskId));
    console.log(findTaskId);
    if (findTaskId !== undefined){
      setTasks(tasks.filter(eachTask => eachTask !== findTaskId)); 
      console.log(tasks);
    }
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
        <label htmlFor="input-text">Filtar tareas:</label>
        <input type="text" name="input-text" id="input-text" value={inputValue} onChange={handleChangeInput}/>
        <label htmlFor="input-add">Añadir nuevas tareas:</label>
        <input type="text" name="input-add" id="input-add" value={inputAdd.task} onChange={handleChangeInputAdd}/>
        <input type="submit" value="Añadir tarea" onClick={handleClickAdd}/>
      </form>
      <p>Tareas totales: {tasks.length}</p>
      <p>Tareas completadas: {completedTasks()}</p>
      <p>Tareas pendientes: {uncompletedTasks()}</p>
    </div>
  );
};

export default App;
