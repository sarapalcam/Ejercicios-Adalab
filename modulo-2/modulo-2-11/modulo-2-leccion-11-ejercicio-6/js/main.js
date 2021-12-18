"use strict";

const inputs = document.querySelectorAll(".js_input");
const text = document.querySelector(".js_text");

function getInputValue(ev) {
  console.log(ev.target.value);
  return ev.target.value;
}

function renderInput(ev) {
  const input = getInputValue(ev);
  text.innerHTML = `${input}`;
}

function handleKeyupInput(ev) {
  getInputValue(ev);
  renderInput(ev);
}

for (const input of inputs) {
  input.addEventListener("keyup", handleKeyupInput);
}

//Pero, ojo! Queremos tener nuestros datos agrupaditos. El reto es guardar y recoger del localStorage un objeto con dos propiedades, nombre y apellido.
