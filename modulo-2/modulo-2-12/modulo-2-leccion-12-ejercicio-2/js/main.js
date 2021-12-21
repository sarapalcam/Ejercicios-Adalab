"use strict";

const form = document.querySelector(".js_form");

function getSelectedValue(ev) {
  return ev.target.value;
}

function renderImgs(ev) {
  const selectedValue = getSelectedValue(ev);
  const imgHTML = document.querySelectorAll(".js_img");
  for (let i = 0; i <= imgHTML.length; i++) {
    imgHTML[i].src = `./images/${selectedValue}/${selectedValue}_${i}.jpg`;
    imgHTML[i].setAttribute("alt", `Imagen ${i} de ${selectedValue}`);
  }
}

function handleClickForm(ev) {
  renderImgs(ev);
}

form.addEventListener("change", handleClickForm);

//Debería añadir las imágenes desde JS
