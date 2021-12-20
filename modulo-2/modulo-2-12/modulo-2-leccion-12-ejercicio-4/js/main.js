"use strict";

const allText = document.querySelectorAll(".js_text");

for (const paragraph of allText) {
  const textHeight = paragraph.offsetHeight;
  paragraph.style = `height: ${textHeight / 3}`;
}

//Por qué no sale?
