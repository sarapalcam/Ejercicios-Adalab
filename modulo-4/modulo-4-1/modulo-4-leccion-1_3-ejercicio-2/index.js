const add = require('./math-add');
const sub = require('./math-sub');
const _ = require('lodash');

const a = 40;
const b = 15;

console.log(add(a, b));

console.log(sub(a, b));

const arrayA = [1, 2, 3];
const arrayB = [2, 3, 4];
const arrayC = [4, 6, 9, 2];

const arrayUnion = _.union(arrayA, arrayB, arrayC);
console.log(arrayUnion);
