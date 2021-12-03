"use strict";

const bodyHTML = document.querySelector(".body");


function changeColor(event){
  console.log(event);
  // console.log(KeyboardEvent.key);
  if (event.key === 'r'){
    bodyHTML.classList.remove("purple");
    bodyHTML.classList.remove("green");
  bodyHTML.classList.add("red");
  

  } else if (event.key === 'm'){
    bodyHTML.classList.remove("green");
    bodyHTML.classList.remove("red");
    bodyHTML.classList.add("purple");
  } else {
    bodyHTML.classList.remove("purple");
    bodyHTML.classList.remove("red");
    bodyHTML.classList.add("green");
  }
}

document.addEventListener("keydown", changeColor);

