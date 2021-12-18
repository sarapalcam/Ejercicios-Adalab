'use strict'

const daysYear = 365;
const hoursDay = 24;
let yearsLived = document.querySelector('.years');
const content = document.querySelector('.hours_lived');
const hoursLived = parseInt(yearsLived.innerHTML) * daysYear * hoursDay;

console.log(hoursLived);

content.innerHTML = `I lived ${hoursLived} hours.`;