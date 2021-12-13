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

const countAdalabers = () =>
  console.log(`Hay un total de ${adalabers.length} adalabers en el listado`);

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

// function theYoungest(array) {
//   let minAge = Math.min.apply(
//     null,
//     array.map(function (object) {
//       return object.age;
//     })
//   );
//   return minAge;
// }

/* ASÍ LO HIZO YANELIS */

function theYoungest(array) {
  let min = array[0].age;
  let name = array[0].name;
  for (let index = 0; index < array.length; index++) {
    if (min > array[index].age) {
      min = array[index].age;
    }
  }
  console.log(`La adalaber más joven tiene ${min} años, es ${name}`);
}

theYoungest(adalabers);

//console.log(`La adalaber más joven tiene ${theYoungest(adalabers)} años`);

function countDesigners(array) {
  let acc = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].proffesion === "diseñadora") {
      acc++;
    }
  }
  console.log(`Hay ${acc} adalabers que son diseñadoras`);
}

countDesigners(adalabers);
