"use strict";

/*COMO LO HICE YO*/

/*function boxSize(boxSizing, w, p, b) {
  if (boxSizing === "border-box") {
    return w;
  } else if (boxSizing === "content-box") {
    return w + p * 2 + b * 2;
  } else {
    return "Datos no válidos";
  }
}

console.log(boxSize("border-box", 300, 15, 2));
console.log(boxSize("content-box", 300, 15, 2));
console.log(boxSize("border-box", 500, 25, 30));
console.log(boxSize("content-box", 500, 25, 30));
console.log(boxSize("boder-box", 300, 15, 2));*/

/*COMO LO HIZO DAYANA*/

function boxSize(borderBox, w, p, b) {
  let container;
  let content;
  if (borderBox) {
    container = w;
    content = w - p * 2 - b * 2;
    console.log(
      `El ancho del contenedor es ${container} y el ancho del contenido es ${content}`
    );
  } else {
    container = w + p * 2 + b * 2;
    content = w;
    console.log(
      `El ancho del contenedor es ${container} y el ancho del contenido es ${content}`
    );
  }
}

console.log(boxSize(true, 300, 15, 2));
console.log(boxSize(false, 300, 15, 2));
console.log(boxSize(true, 500, 25, 30));
console.log(boxSize(false, 500, 25, 30));
