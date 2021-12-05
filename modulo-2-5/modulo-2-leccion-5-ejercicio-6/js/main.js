"use strict";

const input = document.querySelector(".js-input");
const newText = document.querySelector(".js-text");

function updateValue(event) {
  newText.innerHTML = event.currentTarget.value;
}

input.addEventListener("input", updateValue);
