"use strict";

const list = document.querySelector(".js_list");
const numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
  const newListEl = document.createElement("li");
  const newListContent = document.createTextNode(numbers[i]);
  newListEl.appendChild(newListContent);
  list.appendChild(newListEl);
}
