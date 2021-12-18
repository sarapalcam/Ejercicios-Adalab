"use strict";

const listElements = document.querySelector(".js_list");

const list = [
  {
    name: "María",
    age: 24,
    job: "diseñadora",
  },
  {
    name: "Claudia",
    age: 41,
    job: "actriz",
  },
  {
    name: "Ale",
    age: 18,
    job: "periodista",
  },
  {
    name: "Susana",
    age: 33,
    job: "diseñadora",
  },
];

// for (let index = 0; index < list.length; index++) {
//   listElements.innerHTML += `<li>${list[index].name} tiene ${list[index].age} años y es ${list[index].job}.</li>`;
// }

for (const item of list) {
  listElements.innerHTML += `<li>${item.name} tiene ${item.age} años y es ${item.job}.</li>`;
}

for (const item of list) {
  if (item.name.charAt(0) === "C") {
    listElements.innerHTML += `<li>${item.name} tiene ${item.age} años y es ${item.job}.</li>`;
  }
}

for (const item of list) {
  if (item.name.charAt(1) === "l") {
    listElements.innerHTML += `<li>${item.name} tiene ${item.age} años y es ${item.job}.</li>`;
  }
}

for (const item of list) {
  if (item.age % 2 === 0) {
    listElements.innerHTML += `<li>${item.name} tiene ${item.age} años y es ${item.job}.</li>`;
  }
}
