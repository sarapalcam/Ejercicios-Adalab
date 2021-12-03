"use strict"

// const bodyElement = document.querySelector('.body');

// function handleButtonClick(event) {
//   console.log(event.currentTarget);
// }

// bodyElement.addEventListener('click', handleButtonClick);


const inputValue = document.querySelector(".js-input").value
const newText = document.querySelector(".js-text");

function addTextInput(){
    newText.innerHTML += "Hola caracola";
}

inputValue.addEventListener("keydown", addTextInput);