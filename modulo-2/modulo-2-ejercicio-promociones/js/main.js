"use strict";

const results = document.querySelector(".js-result");

const promos = [
  {
    promo: "A",
    name: "Ada",
    students: [
      {
        id: "id-1",
        name: "Sofía",
        age: 20,
      },
      {
        id: "id-2",
        name: "María",
        age: 21,
      },
      {
        id: "id-3",
        name: "Lucía",
        age: 22,
      },
    ],
  },
  {
    promo: "B",
    name: "Borg",
    students: [
      {
        id: "id-4",
        name: "Julia",
        age: 23,
      },
      {
        id: "id-5",
        name: "Tania",
        age: 24,
      },
      {
        id: "id-6",
        name: "Alaia",
        age: 25,
      },
    ],
  },
  {
    promo: "C",
    name: "Clarke",
    students: [
      {
        id: "id-7",
        name: "Lidia",
        age: 26,
      },
      {
        id: "id-8",
        name: "Celia",
        age: 27,
      },
      {
        id: "id-9",
        name: "Nadia",
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ["id-2", "id-3", "id-5", "id-9"];

let resultsContent = "<ul>";

//EJERCICIOS 1, 2 Y 3
// for (const promo of promos) {
//   resultsContent += `<li><p>Nombre: ${promo.name}</p><p>Promo: ${promo.promo}</p><p>Número de alumnas: ${promo.students.length}</p></li>`;
// }

// results.innerHTML += resultsContent + "</ul>";

//EJERCICIOS 4, 5 Y 6
// for (const promo of promos) {
//   resultsContent += `<li>
//     <p>Nombre: ${promo.name}</p>
//     <ul>`;
//   for (const student of promo.students) {
//     if (student.age % 2 === 0) {
//       resultsContent += `<li id=${student.id}>${student.name}, ${student.age}</li>`;
//     }
//   }
//   resultsContent += "</ul>";
// }

// results.innerHTML = resultsContent + "</li></ul>";

//EJERCICIO 7
// for (const promo of promos) {
//   resultsContent += `<li>
//       <p>Nombre: ${promo.name}</p>
//       <ul>`;
//   for (const student of promo.students) {
//     for (const idStudent of studentsWorkingInGoogle) {
//       if (idStudent === student.id) {
//         resultsContent += `<li id=${student.id}>${student.name}, ${student.age}</li>`;
//       }
//     }
//   }
//   resultsContent += "</ul>";
// }

// results.innerHTML = resultsContent + "</li></ul>";

for (const promo of promos) {
  resultsContent += `<li>
    <p>Nombre: ${promo.name}</p>
    <ul>`;
  for (const student of promo.students) {
    resultsContent += `<li id=${student.id}>${student.name}, ${student.age}</li>`;
  }
  resultsContent += "</ul>";
}

results.innerHTML = resultsContent + "</li></ul>";

function showId(ev) {
  ev.target.innerHTML += `, ID: ${ev.target.id}`;
}

function handleClickStudent(ev) {
  showId(ev);
}

results.addEventListener("click", handleClickStudent);
