"use strict";

const background = document.querySelector(".js-background");
const windowScroll = window.scrollY;

function changeColor() {
  if (windowScroll >= 250) {
    background.classList.remove(".red");
    background.classList.add(".blue");
  } else {
    background.classList.remove(".blue");
    background.classList.add(".red");
  }
}

background.addEventListener("scroll", changeColor);
