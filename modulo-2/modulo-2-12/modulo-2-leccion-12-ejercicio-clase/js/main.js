"use strict";

//traer elementos desde HTML
const sectionElement = document.querySelector(".js_section");
const listElement = document.querySelector(".js_list");

//////////////AÑADIR UN ELEMENTO

//crear los elementos
const paragraphEl = document.createElement("p"); //crear un elemento de html
const newText = document.createTextNode(
  "P2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis debitis consectetur, mollitia saepe quibusdam libero itaque nisi quos dolores amet ea eius? Molestiae assumenda dicta iste, beatae dolorum consequatur."
); //crear el texto para el elemento
paragraphEl.appendChild(newText); //añadir ese texto a mi elemento
sectionElement.appendChild(paragraphEl); //añadirlo al html

//////////////SOBREESCRIBIR

const newText2 = document.createTextNode(
  "P2: Lorem ipsum dolor sit amet consectetur adipisicing elit"
);
paragraphEl.removeChild(newText); //tenemos que eliminar el texto que tenemos. Se puede hacer con el text inicial que teníamos en HTML. Si son páginas pequeñas lo podemos hacer con innerHTML
paragraphEl.appendChild(newText2);

//////////////AÑADIR VARIOS ELEMENTOS DENTRO UN ELEMENTO

//listado
const list = ["Claudia", "Bea", "Sofia"];

// for (const item of list) {
//   const liElement = document.createElement("li");
//   const liContent = document.createTextNode(item);
//   liElement.appendChild(liContent);
//   listElement.appendChild(liElement);
// }

//////////////AÑADIR ELEMENTOS DENTRO ELEMENTOS

for (const item of list) {
  const liElement = document.createElement("li");
  const liContent = document.createTextNode(item);
  liElement.appendChild(liContent);
  listElement.appendChild(liElement);

  //trabajando con el data: agrega un nuevo atributo personalizado
  liElement.dataset.usuaria = item;

  //añadir imágenes
  const imgElement = document.createElement("img");
  imgElement.src =
    "https://thumbs.dreamstime.com/z/random-cat-love-cats-pet-catsslave-110819582.jpg";
  imgElement.alt = "gatitos";
  imgElement.style.width = "60px";
  imgElement.style.height = "60px";
  //Otro modo: setAttribute(propiedad, valor)
  //imgElement.setAttribute("src", "url");
  //imgElement.setAttribute("alt", "gatitos")
  liElement.appendChild(imgElement);
  liElement.addEventListener("click", handleClick);
}

function handleClick(ev) {
  console.log(ev.currentTarget.dataset.usuaria);
}
