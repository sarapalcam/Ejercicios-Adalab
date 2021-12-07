"use strict";

let initDate = Date.parse(2017, 9, 5);
let endDate = Date.parse(2032, 11, 31);
let calcYear = (endDate - initDate) / 15;
let threeYears = calcYear * 3;

for (let i = initDate; i < endDate; i = i + threeYears) {
  console.log(`La próxima Luna del Cazador será el: ${i}`);
}
