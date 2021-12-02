"use strict";

const element = (cssSelector) => document.querySelector(cssSelector);
const number = (a) => (a % 2 === 0 ? true : false);

console.log(element(".number"));
console.log(number(21));
