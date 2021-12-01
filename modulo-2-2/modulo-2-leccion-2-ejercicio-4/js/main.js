'use strict'


const check = 128;
const people = 9;
const sake = 2;
const checkAna = (check - sake) / people + sake;
const checkRest = (check - checkAna) / (people - 1);

console.log(checkAna);
console.log(checkRest);
