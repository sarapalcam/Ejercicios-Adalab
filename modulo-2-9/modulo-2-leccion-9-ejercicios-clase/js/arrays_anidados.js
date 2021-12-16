"use strict";

//for anidados

const ul = document.querySelector(".js_ul");

const list = [
  [
    "Alejandra",
    "MP",
    "no todos los arrays tienen que tener",
    "la",
    "misma",
    "longitud",
  ],
  ["Alicia", "Gallego"],
  ["Ana", "de la Jara"],
  ["Angeles", "MB", "es verdad"],
  ["Bárbara", "Ruiz", "lo", "que", "dice"],
  ["Claudia", "Berrocal", "Alejandra"],
];

//Logueamos el nombre y el apellido, pero por separado
for (const nombreCompleto of list) {
  console.log(nombreCompleto);
  for (const nombre of nombreCompleto) {
    console.log(nombre);
  }
}

//Pintamos el nombre
for (const nombreCompleto of list) {
  console.log(nombreCompleto);
  ul.innerHTML += `<li>${nombreCompleto[0]}</li>`;
}

//Pintamos el apellido
for (const nombreCompleto of list) {
  console.log(nombreCompleto);
  ul.innerHTML += `<li>${nombreCompleto[1]}</li>`;
}

//Pintamos nombre y apellidos. Necesitamos un bucle dentro de otro para poder acceder a todos los elementos de los arrays que están dentro del array list
for (const nombreCompleto of list) {
  let html = "<li>";
  for (const nombre of nombreCompleto) {
    html += nombre + " ";
  }
  html += "</li>";
  ul.innerHTML += html;
}
