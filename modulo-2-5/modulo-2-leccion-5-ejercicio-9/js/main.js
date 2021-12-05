"use strict";

const listTeachers = document.querySelector(".js-teachers");
const teacher1 = listTeachers.querySelector(".js-teacher--isra");
const teacher2 = listTeachers.querySelector(".js-teacher--tuerto");
const teacher3 = listTeachers.querySelector(".js-teacher--nasi");

function selectTeacher(event) {
  const selectedTeacher = event.target;
  selectedTeacher.classList.toggle("teacher--selected");
  // const legend = selectedTeacher.querySelector(".favorite");
  // legend.innerHTML = "Añadir"
  //   ? (legend.innerHTML = "Quitar")
  //   : (legend.innerHTML = "Añadir");
}

listTeachers.addEventListener("click", selectTeacher);

// teacher1.addEventListener("click", selectTeacher);
// teacher2.addEventListener("click", selectTeacher);
// teacher3.addEventListener("click", selectTeacher);

/*No sé cómo hacer para que el texto vuelva a ser Añadir*/
