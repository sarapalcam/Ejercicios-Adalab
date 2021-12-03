"use strict";

// const window = document;

// function keyboardEvent(event) {
//   document.innerHTML;
// }

const keyPressed = document.querySelector(".body");
let keyPressed;

function keyboardEvent(event) {
  console.log(event);
  const key = event;
  if (key === "r") {
    keyPressed.classList.add(".red");
  } else if (key === "m") {
    keyPressed.classList.add(".pruple");
  } else {
    keyPressed.classList.add(".green");
  }
}

keyPressed.addEventListener("keydown", keyboardEvent);
