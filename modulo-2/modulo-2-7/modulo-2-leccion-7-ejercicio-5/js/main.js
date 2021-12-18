"use strict";

const numbers = [4, 3, 24, 9, 11, 18, 7, 9];
let acc = 0;

function average(array) {
  for (let i = 0; i < array.length; i++) {
    acc += array[i];
  }
  return acc / array.length;
}

console.log(`La media del array "numbers" es: ${average(numbers)}`);

/* ¿Por qué esto no funciona?

for (let i = 0; i < numbers.length; i++) {
      (acc += numbers[i]) / 5;
  } */
