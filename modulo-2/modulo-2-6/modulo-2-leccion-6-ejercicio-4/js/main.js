"use strict"

const btn = document.querySelector(".js-btn");
const input = document.querySelector(".js-input");

btn.addEventListener("click", learningEvent);

function learningEvent(event){
    console.log(event);
}

console.dir(input);