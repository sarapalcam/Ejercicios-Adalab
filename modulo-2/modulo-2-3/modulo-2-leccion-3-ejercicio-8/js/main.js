"use strict";

const year = 2021;

if (year % 4 === 0) {
  console.log("Estamos en un año bisiesto");
} else {
  console.log(year + (4 - (year % 4)));
}
