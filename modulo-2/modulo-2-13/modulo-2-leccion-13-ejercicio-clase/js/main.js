"use strict";

//1. Ejemplo de findIndex
// const input = document.querySelector(".js_input");

// const user = "Mara";
// const names = ["Claudia", "Mireia", "Inma", "Mara", "Norma"];

// const index = names.findIndex((name) => name === user);
// input.value = index;

// if (index !== -1) {
//   //Si el elemento que buscamos no está en la lista, nos devuelve -1:
//   names.splice(index, 1);
//   console.log(names);
// }

//2. Ejemplo de map
// const numbers = [1, 2, 3, 4, 5];
// const ivaNumbers = numbers.map((number) => number * 1.21);
// console.log(ivaNumbers);

// const lowerCaseName = names.map(name => name.toLowerCase());
// console.log(lowerCaseName);

//////////////////////////////////////////////////////////////////////////////////////

//3. Ejemplos de búsqueda con un fetch
// const listElement = document.querySelector(".js_list");
// const input = document.querySelector(".js_input");

// let data = [];

// fetch("https://randomuser.me/api/?results=50")
//   .then((response) => response.json())
//   .then((dataApi) => {
//     data = dataApi.results;
//     //render();
//   });

//3.1.  Ejemplos con index y filter
/**** 
 * function render() {
  console.table(data); //Nos devuelve los datos en una tabla
  //find: sólo te devuelve el primer valor que encuentra
  const user = data.find((user) => user.name.first.toLowerCase().includes("c"));
  console.log(user);
  //filter: devuelve un listado con todos los valores que cumplen la condición
  const usersFiltered = data.filter((user) =>
    user.name.first.toLowerCase().includes("c")
  );
  console.log(usersFiltered);
  for (const item of data) {
    listElement.innerHTML += `<li>${item.name.first}</li>`;
  }
} 
****/

//3.2. Si sólo quiero mostrar el listado de los usuarios que he filtrado
/****
function render() {
  const usersFiltered = data.filter((user) =>
    user.name.first.toLowerCase().includes("c")
  );
  console.log(usersFiltered);
  for (const item of usersFiltered) {
    listElement.innerHTML += `<li>${item.name.first}</li>`;
  }
}
****/

//3.3. Si quiero mostrar el listado de los usuarios en función de la búsqueda de la usuaria
// function render() {
//   let userSearch = input.value;
//   //console.log(userSearch);
//   const usersFiltered = data.filter(
//     (user) => user.name.first.toLowerCase().includes(userSearch) //Con startWith podemos filtar por la primera letra
//   );
//   //console.log(usersFiltered);
//   listElement.innerHTML = "";
//   for (const item of usersFiltered) {
//     listElement.innerHTML += `<li>${item.name.first}</li>`;
//   }
// }
// function handleKeyupInput() {
//   render();
// }

// input.addEventListener("keyup", handleKeyupInput);

//4. Filtrando con map
const listElement = document.querySelector(".js_list");
const input = document.querySelector(".js_input");

let data = [];

fetch("https://randomuser.me/api/?results=50")
  .then((response) => response.json())
  .then((dataApi) => {
    data = dataApi.results;
  });

function render() {
  let userSearch = input.value;
  const userFiltered = data
    .filter((user) => user.name.first.toLowerCase().includes(userSearch))
    .map((user) => user.name.first.toUpperCase()); //Este toUpperCase me cambia la vista de la lista
  //console.log(userFiltered);
  listElement.innerHTML = "";
  for (const item of userFiltered) {
    listElement.innerHTML += `<li>${item}</li>`;
  }
}

function handleKeyupInput() {
  render();
}

input.addEventListener("keyup", handleKeyupInput);
