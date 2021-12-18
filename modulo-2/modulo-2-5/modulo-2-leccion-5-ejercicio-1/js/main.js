"use strict";

const textClick = document.querySelector(".hi-click");
const button = document.querySelector(".btn");

function changeText() {
  textClick.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

button.addEventListener("click", changeText);
