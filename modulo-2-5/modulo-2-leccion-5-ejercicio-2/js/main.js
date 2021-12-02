"use strict";

const nameInput = document.querySelector(".js-name").value;
const btnName = document.querySelector(".btn");

function hi() {
  console.log(`Hola ${nameInput}`);
}

btnName.addEventListener("click", hi);
