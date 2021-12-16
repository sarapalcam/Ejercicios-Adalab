"use strict";

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

title.innerHTML = `Tenemos un total de ${tasks.length} tareas`;

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
}

//Llamamos a la función

render();
