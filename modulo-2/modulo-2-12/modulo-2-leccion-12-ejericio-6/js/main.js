"use strict";

const main = document.querySelector(".js_main");
const colors = ["blanco", "azul", "rojo", "verde", "amarillo", "rosa"];

function handleChangeOption(ev) {
  console.log(ev.currentTarget);
  console.log(ev.target.parentNode);
  for (const color of colors) {
    if (ev.target.value === color) {
      ev.target.parentNode.classList.add(`${color}`);
    }
  }
}
//pensar en cómo eliminar el resto de clases al cambiar la opción sin tener que escribir muchas líneas de código

for (let i = 1; i <= 100; i++) {
  const newParagraph = document.createElement("p");
  const paragraphContent = document.createTextNode(
    `${i}: He aprendido bien cómo funcionan los bucles`
  );
  const newSelect = document.createElement("select");
  for (let i = 0; i < colors.length; i++) {
    const newOption = document.createElement("option");
    newOption.value = colors[i];
    newOption.innerText = colors[i];
    newOption.classList.add("option");
    newSelect.appendChild(newOption);
    newSelect.addEventListener("change", handleChangeOption);
  }
  newParagraph.appendChild(paragraphContent);
  newParagraph.appendChild(newSelect);
  main.appendChild(newParagraph);
}
