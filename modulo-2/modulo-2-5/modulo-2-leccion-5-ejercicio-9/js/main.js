"use strict";

const listTeachers = document.querySelector(".js-teachers");
const teacher1 = listTeachers.querySelector(".js-teacher--isra");
const teacher2 = listTeachers.querySelector(".js-teacher--tuerto");
const teacher3 = listTeachers.querySelector(".js-teacher--nasi");

function toggleSelectedClass(event) {
  const selectedTeacher = event.currentTarget;
  selectedTeacher.classList.toggle("teacher--selected");
}

function toggleTextSelected(event) {
  const textCurrentTarget = event.currentTarget.querySelector(".favorite");
  if (event.currentTarget.classList.contains("teacher--selected")) {
    textCurrentTarget.innerHTML = "Quitar";
  } else {
    textCurrentTarget.innerHTML = "Añadir";
  }
}

function handleClickListElement(event) {
  toggleSelectedClass(event);
  toggleTextSelected(event);
}

teacher1.addEventListener("click", handleClickListElement);
teacher2.addEventListener("click", handleClickListElement);
teacher3.addEventListener("click", handleClickListElement);

/*

// Vamos a refactorizar el EJERCICIO 9 para mejorarlo. Tenemos que quitar ese mogollón de listeners en los lis, reemplazarlos por uno solo en la etiqueta madre (ul) y trabajar con event.target

const listTeachers = document.querySelector(".js-teachers");
const teacher1 = listTeachers.querySelector(".js-teacher--isra");
const teacher2 = listTeachers.querySelector(".js-teacher--tuerto");
const teacher3 = listTeachers.querySelector(".js-teacher--nasi");

function toggleSelectedClass(event) {
  event.target.parentNode.classList.toggle("teacher--selected");
}

// function toggleSelectedClass(event) {
//   console.log(event.target);
//   const selectedTeacher = event.target;
//   selectedTeacher.classList.toggle("teacher--selected");
// }

/*function toggleTextSelected(event) {
  const textCurrentTarget = event.target.querySelector(".favorite");
  if (event.target.classList.contains("teacher--selected")) {
    textCurrentTarget.innerHTML = "Quitar";
  } else {
    textCurrentTarget.innerHTML = "Añadir";
  }
} 

function handleClickListElement(event) {
  toggleSelectedClass(event);
  //toggleTextSelected(event);
}

listTeachers.addEventListener("click", handleClickListElement);

*/
