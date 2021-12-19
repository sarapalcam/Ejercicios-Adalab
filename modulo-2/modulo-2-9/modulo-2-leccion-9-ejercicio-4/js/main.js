"use strict";

// d) Tareas totales. No nos podemos olvidar de los detalles. Añadamos por encima del listado de tareas una frase que diga: Tienes X tareas. Y completadas y Z por realizar. Cada vez que una tarea se marque/desmarque deberiamos actualizar esta información.

//Mi lista de constantes

const list = document.querySelector(".js_list");
const title = document.querySelector(".js_title");

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

//Ponemos el número de tareas en el título

let completedTasks = 0;
let unfinshedTasks = 0;

//Funciones

function addListener() {
  //Podemos llamar a nuestros <li> porque ya los hemos creado
  const allInputs = document.querySelectorAll(".js_input");
  for (const input of allInputs) {
    input.addEventListener("click", handleClickTask);
  }
}

function render() {
  list.innerHTML = "";
  for (let index = 0; index < tasks.length; index++) {
    if (tasks[index].completed) {
      list.innerHTML += `<li class="completed js_list_item"><input id=${index} class="js_input" type="checkbox" checked/>${tasks[index].name}</li>`;
    } else {
      list.innerHTML += `<li class="js_list_item"><input  id=${index} class="js_input" type="checkbox"/>${tasks[index].name}</li>`;
    }
  }
  addListener();
}

function updateCounter() {
  completedTasks = 0;
  for (const task of tasks) {
    if (task.completed) {
      completedTasks++;
    }
  }
  return completedTasks;
}

//Funciones manejadoras

function handleClickTask(event) {
  event.preventDefault();
  const posTask = event.currentTarget.id;
  if (tasks[posTask].completed) {
    tasks[posTask].completed = false;
  } else {
    tasks[posTask].completed = true;
  }
  render();
  updateCounter();
}

//Llamamos a la función

render();
renderTotal();

function renderTotal() {
  updateCounter();
  title.innerHTML = `Tienes ${
    tasks.length
  } tareas. ${completedTasks} completadas y ${
    tasks.length - completedTasks
  } por realizar`;
}

//TERMINAR EL EJERCICIO
