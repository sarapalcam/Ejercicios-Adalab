"use strict";

const background = document.querySelector(".js-background");
// const windowScroll = window.scrollY;

function changeColor() {
  if (window.scroll(0, 250)) {
    background.classList.remove("red");
    background.classList.add("blue");
  } else {
    background.classList.remove("blue");
    background.classList.add("red");
  }
}

background.addEventListener("scroll", changeColor);
