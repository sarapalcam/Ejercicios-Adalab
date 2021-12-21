"use strict";

//const allText = document.querySelectorAll(".js_text");

// for (const paragraph of allText) {
//   const textHeight = paragraph.offsetHeight;
//   paragraph.style.height = textHeight / 3;
//   console.log(textHeight);
//   console.log(textHeight / 3);
// }

//Por qué no sale?

const p = document.querySelectorAll(".js_text");
p[0].style.height = "30%";
console.log(p[0].offsetHeight);
