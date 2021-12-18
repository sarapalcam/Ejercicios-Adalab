"use strict";

const background = document.querySelector(".js-background");
// const windowScroll = window.scrollY;

function changeColor() {
 if (window.scrollY <1000){
   background.classList.add("blue");
 } else if (window.scrollY > 1000) {
   background.classList.remove("blue");
   background.classList.add("red");
 }
}

window.addEventListener("scroll", changeColor);

