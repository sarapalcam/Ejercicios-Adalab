"use strict";

function pairOdd(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function getEl(cssSelector) {
  return document.querySelector(cssSelector);
}

const number = parseInt(getEl(".number").innerHTML);

if (pairOdd(number) === true) {
  console.log(`Este número es PAR: ${number}`);
} else {
  console.log(`Este número es IMPAR: ${number}`);
}
