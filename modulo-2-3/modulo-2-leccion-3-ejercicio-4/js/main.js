'use strict'

const dogAge = 6;
const dogOlder2 = (dogAge - 2) * 5 + 21;

if (dogAge < 0) {
    console.log(`Tu perro aún no ha nacido.`);
} else if (dogAge === 0) {
    console.log(`¡Tu perro acaba de nacer!`);
} else if (dogAge === 1) {
    console.log(`Tu perro tiene 15 años humanos.`);
} else if (dogAge === 2) {
    console.log(`Tu perro tiene 21 años humanos.`);
} else if (dogAge > 2 && dogAge <= 18) {
    console.log(`Tu perro tiene ${dogOlder2} años humanos.`);
} else if (dogAge > 18) {
    console.log(`Tu perro probablemente esté en un lugar mejor...`);
}