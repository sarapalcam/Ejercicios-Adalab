"use strict";

/* Crear las constantes de los elementos tomados en HTML*/

const input1 = document.querySelector(".js-input-1");
const input2 = document.querySelector(".js-input-2");
const formBtn = document.querySelector(".js-form-btn");
let html = document.querySelector("js-body");

/* Crear un array vacío*/

let favouriteBooks = [];

/* Añadir un evento para que al clickar el botón se ejecute la función que añade el value del input al array y lo loguea en la consola*/

function addValueToArray() {
  favouriteBooks = [input1.value, input2.value];
  for (const book of favouriteBooks) {
    console.log(
      `¡A mí también me encantó ${book}! Tenemos mucho en común, humana`
    );
  }
}

formBtn.addEventListener("click", addValueToArray);

