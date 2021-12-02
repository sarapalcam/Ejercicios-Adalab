"use strict";

function boxSize(boxSizing, w, p, b) {
  if (boxSizing === "border-box") {
    return w;
  } else if (boxSizing === "content-box") {
    return w + p * 2 + b * 2;
  } else {
    return "Datos no válidos";
  }
}

const totalWidth = boxSize;

console.log(totalWidth("border-box", 300, 15, 2));
console.log(totalWidth("content-box", 300, 15, 2));
console.log(totalWidth("border-box", 500, 25, 30));
console.log(totalWidth("content-box", 500, 25, 30));
console.log(totalWidth("boder-box", 300, 15, 2));
