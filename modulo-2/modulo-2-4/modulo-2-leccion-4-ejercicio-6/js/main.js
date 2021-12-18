"use strict";

function getEl(cssSelector) {
  const element = document.querySelector(cssSelector);
  if (element === null) {
    console.log(
      `No existe ningún elemento con clase, id o tag llamado ${cssSelector}`
    );
  } else {
    return document.querySelector(cssSelector);
  }
}

const headerEl = getEl(".header");
const titleEl = getEl(".header__title");
const mainTextEl = getEl(".main__text");
const footerEl = getEl(".foote");

console.log(titleEl);
console.log(headerEl);
console.log(mainTextEl);
console.log(footerEl);
