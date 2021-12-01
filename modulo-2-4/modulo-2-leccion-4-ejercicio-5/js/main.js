"use strict"

function getEl(cssSelector){
    return document.querySelector(cssSelector);
}

const headerEl = getEl(".header");
const titleEl = getEl(".header__title");

console.log(titleEl);
console.log(headerEl);

