"use strict";

console.log("Empezamos :)");

/*** COMO LO HICE YO ***/

// const bodyHTML = document.querySelector(".js_main");
// const selectMood = document.querySelector(".js_mood_select");
// const happy = document.querySelector(".js_select_happy");
// const sad = document.querySelector(".js_select_sad");
// const faceDrawn = document.querySelector(".js_face");
// const updateBtn = document.querySelector(".js_btn");

// function handleClickMood(event) {
//   if (event.target.value === "happy") {
//     faceDrawn.value = ":)";
//   } else if (event.target.value === "sad") {
//     faceDrawn.value = ":(";
//   }
// }

// function drawFace() {
//   faceDrawn.innerHTML = faceDrawn.value;
// }

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
//   console.log(randomNumber);
//   return randomNumber;
// }

// function changeColor() {
//   if (getRandomIntInclusive(0, 100) % 2 === 0) {
//     bodyHTML.classList.add("main_happy");
//     bodyHTML.classList.remove("main_sad");
//   } else {
//     bodyHTML.classList.remove("main_happy");
//     bodyHTML.classList.add("main_sad");
//   }
// }

// function handleClickUpdate(event) {
//   event.preventDefault();
//   drawFace();
//   changeColor();
// }

// selectMood.addEventListener("click", handleClickMood);
// updateBtn.addEventListener("click", handleClickUpdate);

/*** COMO LO HIZO IVÁN ***/

const mainHTML = document.querySelector(".js_main");
const selectMood = document.querySelector(".js_mood_select");
const faceDrawn = document.querySelector(".js_face");
const updateBtn = document.querySelector(".js_btn");

function renderFace(face) {
  faceDrawn.innerHTML = face;
}

function changeFace() {
  const userValue = selectMood.value;
  userValue === "happy" ? renderFace(":)") : renderFace(":(");
}

function getRandom(max) {
  return Math.ceil(Math.random() * max); //Se puede cambiar math.ceil por parseInt
}

function changeColor() {
  const randomNumber = getRandom(100);
  console.log(randomNumber);
  if (randomNumber % 2 === 0) {
    mainHTML.classList.add("main_happy");
    mainHTML.classList.remove("main_sad");
  } else {
    mainHTML.classList.remove("main_happy");
    mainHTML.classList.add("main_sad");
  }
}

function handleClickUpdate(event) {
  event.preventDefault();
  changeFace();
  changeColor();
}

updateBtn.addEventListener("click", handleClickUpdate);
