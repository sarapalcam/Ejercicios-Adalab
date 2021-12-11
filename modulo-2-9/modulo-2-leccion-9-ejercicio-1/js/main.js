"use strict";

const arrayOfNumbers = [];

function get100Numbers(n){
    for (let i = 1; i <= n; i++){
        arrayOfNumbers.push(i);
        console.log(i);
    }
}

// function getReversed100Numbers(n){
//     get100Numbers(n);
//     return arrayOfNumbers.reverse();
// }

get100Numbers(100);
// getReversed100Numbers(100);


// No me sale el ejercicio 2, ¿cómo los logueo uno a uno?