"use strict";

const main = document.querySelector(".js_main");
const colors = ["blanco", "azul", "rojo", "verde", "amarillo", "rosa"];

for (let i = 1; i <= 100; i++) {
  const newParagraph = document.createElement("p");
  const paragraphContent = document.createTextNode(
    `${i}: He aprendido bien cómo funcionan los bucles`
  );
  const newSelect = document.createElement("select");
  for (let i = 0; i < colors.length; i++) {
    const newOption = document.createElement("option");
    newOption.setAttribute("value", `${colors[i]}`);
    newSelect.appendChild(newOption);
  }
  newParagraph.appendChild(paragraphContent);
  newParagraph.appendChild(newSelect);
  main.appendChild(newParagraph);
}
