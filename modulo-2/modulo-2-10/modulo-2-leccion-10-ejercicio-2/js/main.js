"use strict";

function fetchImage(classHTML) {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector(classHTML);
      img.src = data.message;
      img.alt = "Un perro";
    });
}

function getDogImage() {
  fetchImage(".img1");
}

// function getDogImage2() {
//   fetchImage(".img2");
// }

const btn = document.querySelector(".js-dog");
const btn2 = document.querySelector(".js-dog2");
btn.addEventListener("click", getDogImage);
btn2.addEventListener("click", getDogImage);

//Esto no creo que esté bien así
