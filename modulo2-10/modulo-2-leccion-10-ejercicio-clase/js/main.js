//Función que se hace dentro del primer .then del fetch
// function convertJS(response) {
//   return response.json();
// }

//Funciones arrow: si sólo tiene un parámetro no hace falta poner paréntesis, y si el return tiene sólo una línea, no es necesario ponerlo

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((jsonData) => {
//     console.log(jsonData);
//   });

//Apis públicas: https://github.com/public-apis/public-apis

"use strict";

//Mi lista de constantes

const list = document.querySelector(".js_list");
const title = document.querySelector(".js_title");
let tasks = [];

//Obtener tareas
fetch("http://api.igarrido.es/tasks.json")
  .then((response) => response.json())
  .then((taskData) => {
    console.log(taskData);
    tasks = taskData;
    render();
  });

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

//PRIMERO TENGO QUE HACER EL EJERCICIO 4 BIEN
