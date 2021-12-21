"use strict";

const times = [56, 9, 45, 28, 35];

function average(array) {
  return array.reduce((acc, time) => acc + time) / array.length;
}

console.log(average(times));
