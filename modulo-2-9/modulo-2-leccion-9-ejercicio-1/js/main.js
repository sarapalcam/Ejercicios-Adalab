"use strict";

const arrayOfNumbers = [];

function get100Numbers(n) {
  for (let i = 0; i <= n; i++) {
    arrayOfNumbers.push(i);
    // console.log(arrayOfNumbers[i]);
  }
  return arrayOfNumbers;
}

get100Numbers(100);

function getReversed100Numbers(n) {
  get100Numbers(n).reverse();
  for (let i = 0; i < n; i++) {
    console.log(arrayOfNumbers[i]);
  }
}

getReversed100Numbers(100);
