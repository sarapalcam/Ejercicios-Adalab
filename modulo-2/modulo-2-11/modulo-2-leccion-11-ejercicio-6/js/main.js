"use strict";

const inputs = document.querySelectorAll(".js_input");
const text = document.querySelector(".js_text");

const userData = {
  name: "",
  surname: "",
};

function getInputValue(ev) {
  if (ev.target.id === "name") {
    userData.name = ev.target.value;
  }
  if (ev.target.id === "surname") {
    userData.surname = ev.target.value;
  }
  localStorage.setItem("userData", JSON.stringify(userData));
}

function autoSaveName() {
  const getUserData = JSON.parse(localStorage.getItem("userData"));
  console.log(getUserData.name);
  console.log(getUserData.surname);
  for (const input of inputs) {
    if (input.id === "name") {
      input.value = getUserData.name;
    }
    if (input.id === "surname") {
      input.value = getUserData.surname;
    }
  }
}

function renderInput(ev) {
  text.innerHTML = `Nombre completo: ${userData.name} ${userData.surname}`;
}

function handleKeyupInput(ev) {
  getInputValue(ev);
  renderInput(ev);
}

for (const input of inputs) {
  input.addEventListener("keyup", handleKeyupInput);
}

//Ejercicio 7: antes de recuperar los datos del localStorage tenemos que comprobar que hay algo en ellos
if (localStorage.length > 0) {
  autoSaveName();
}
