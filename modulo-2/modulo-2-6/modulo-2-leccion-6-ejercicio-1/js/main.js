"use strict";

/*Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) showBio que muestra en la consola la frase 'Mi nombre es María, tengo 34 años y soy periodista', usando el nombre, edad y estudios que están almacenados en el objeto.
Hacemos lo mismo para adalaber2 definida en el ejercicio 1. ¿Hemos tenido que modificar mucho el método showBio? ¿Ves alguna ventaja respecto a cómo hacíamos lo mismo en el ejercicio 1?
Nota: para que el ejercicio funcione bien debéis usar funciones normales, no arrow funtions. En siguientes sesiones veremos por qué cambia el this al usar arrow funtions.*/

const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
  run: (action) => console.log(`Estoy ${action}`),
  runMarathon: (distance) =>
    `${adalaber1.run(`corriendo un maratón de ${distance} kilómetros`)}`,
  showBio: function () {
    return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`;
  },
};

const adalaber2 = {
  name: "Rocío",
  age: 25,
  job: "actriz",
  showBio: function () {
    return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`;
  },
};

const bodyHTML = document.querySelector(".js-body");

// bodyHTML.innerHTML = `<p>Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.</p>`;
// bodyHTML.innerHTML += `<p>Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.</p>`;
bodyHTML.innerHTML += `<p>${adalaber1.showBio()}.</p>`;
bodyHTML.innerHTML += `<p>${adalaber2.showBio()}.</p>`;
