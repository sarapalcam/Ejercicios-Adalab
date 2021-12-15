"use strict";

/* Mostrar una frase que indique cuántas tareas hay.
Pintar todas las tareas en pantalla.
Tachar las ya realizadas.
Permitir marcar una tarea como 'completa' o 'incompleta'.

a) Vamos a por una tarea. Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado.

b) Listado de tareas. ¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado, cada una de las tareas completadas debe aparecer tachada.

c) Vamos a darle dinamismo. Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un input de tipo checkbox al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado (checked). 


Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas: la tarea debe mostrarse como completada (tachada) debemos modificar su estado (propiedad completed) en el array tasks.

d) Tareas totales. No nos podemos olvidar de los detalles. Añadamos por encima del listado de tareas una frase que diga: Tienes X tareas. Y completadas y Z por realizar. Cada vez que una tarea se marque/desmarque deberiamos actualizar esta información. */

const list = document.querySelector(".js_list");

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: true,
  },
];

// 1. Logueamos el número de tareas (quizás este mejor ponerlo como título)

console.log(`Tenemos un total de ${tasks.length} tareas`);

// 2. Pintamos una tarea y la la marcamos como completada

//list.innerHTML += `<li class="completed">${tasks[0].name}</li>`;

// 3. Pintamos todas las tareas tachadas y añadimos los checkbox marcados

// for (const item of tasks) {
//   if (item.completed) {
//     list.innerHTML += `<li class="completed">${item.name}<input type="checkbox" checked/></li>`;
//   } else {
//     list.innerHTML += `<li>${item.name}<input type="checkbox"/></li>`;
//   }
// }

// 4. Cuando la usuaria haga click, la tarea se tachará o destachará

for (const item of tasks) {
  list.innerHTML += `<li>${item.name}<input type="checkbox"/></li>`;
}

function handleClickTask(event) {
  console.log(event);
}

list.addEventListener("click", handleClickTask);
