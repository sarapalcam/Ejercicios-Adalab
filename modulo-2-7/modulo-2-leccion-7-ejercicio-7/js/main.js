"use strict";

const adalabers = [
  {
    name: "María",
    age: 29,
    proffesion: "diseñadora",
  },
  {
    name: "Lucía",
    age: 31,
    proffesion: "ingeniera química",
  },
  {
    name: "Susana",
    age: 34,
    proffesion: "periodista",
  },
  {
    name: "Rocío",
    age: 25,
    proffesion: "actriz",
  },
  {
    name: "Inmaculada",
    age: 21,
    proffesion: "diseñadora",
  },
];

// function countAdalabers() {
//   return console.log(
//     `Hay un total de ${adalabers.length} adalabers en el listado`
//   );
// }

const countAdalabers = () => {
  console.log(`Hay un total de ${adalabers.length} adalabers en el listado`);
};

let acc = 0;

function averageAge(array) {
  for (let i = 0; i < array.length; i++) {
    acc += array[i].age;
  }
  return acc / array.length;
}

console.log(
  `La media de edad de las adalabers es de ${averageAge(adalabers)} años`
);

function theYoungest(array) {
  let minAge = Math.min.apply(
    null,
    array.map(function (object) {
      return object.age;
    })
  );
  return minAge;
}

console.log(`La adalaber más joven tiene ${theYoungest(adalabers)} años`);

/* 

Una función countDesigners que devuelve el número de adalabers que son diseñadoras.

*/
