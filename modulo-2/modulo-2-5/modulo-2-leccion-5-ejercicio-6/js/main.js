"use strict";

const input = document.querySelector(".js-input");
const newText = document.querySelector(".js-text");

function updateValue(event) {
  newText.innerHTML = event.currentTarget.value;
}

input.addEventListener("input", updateValue);
//Se puede usar también el evento "keyup" o "change", pero el "change" cambia cuando terminamos de escribir el nombre completo, es decir, cuando salimos del elemento en el que estamos escribiendo. Por lo general se usa siempre el "keydown" y no el "keyup", este último es para temas más específicos
