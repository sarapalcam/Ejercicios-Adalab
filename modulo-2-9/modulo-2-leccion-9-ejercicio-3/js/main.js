"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];

const lostEvenNum = [];
const lostMultiples3Num = [];

/***  ÚNICA FUNCIÓN ***/

function lostConcatNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      lostEvenNum.push(array[i]);
    }
    if (array[i] % 3 === 0) {
      lostMultiples3Num.push(array[i]);
    }
  }
  const lostNumConcat = lostEvenNum.concat(lostMultiples3Num);
  return lostNumConcat;
}

console.log(lostConcatNumbers(lostNumbers));

/***  FUNCIONES POR SEPARADO ***/

/* function getEvenNum(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      lostEvenNum.push(array[i]);
    }
  }
  return lostEvenNum;
}

function getMultiples3Num(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
      lostMultiples3Num.push(array[i]);
    }
  }
  return lostMultiples3Num;
}

console.log(getEvenNum(lostNumbers));
console.log(getMultiples3Num(lostNumbers));

const lostNumConcat = lostEvenNum.concat(lostMultiples3Num);

console.log(lostNumConcat); */
