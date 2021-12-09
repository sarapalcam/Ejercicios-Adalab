"use strict";

const bodyHTML = document.querySelector(".body");
const selectMood = document.querySelector(".js_mood_select");
const happy = document.querySelector(".js_select_happy");
const sad = document.querySelector(".js_select_sad");
const faceDrawn = document.querySelector(".js_face");
const updateBtn = document.querySelector(".js_btn");

function handlerClickMood(event) {
  if (event.target.value === "happy") {
    faceDrawn.value = ":)";
  } else if (event.target.value === "sad") {
    faceDrawn.value = ":(";
  }
}

function drawFace() {
  faceDrawn.innerHTML = faceDrawn.value;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(randomNumber);
  return randomNumber;
}

function changeColor() {
  if (getRandomIntInclusive(0, 100) % 2 === 0) {
    bodyHTML.classList.add("body_happy");
    bodyHTML.classList.remove("body_sad");
  } else {
    bodyHTML.classList.remove("body_happy");
    bodyHTML.classList.add("body_sad");
  }
}

function handlerClickUpdate(event) {
  event.preventDefault();
  drawFace();
  changeColor();
}

selectMood.addEventListener("click", handlerClickMood);
updateBtn.addEventListener("click", handlerClickUpdate);
