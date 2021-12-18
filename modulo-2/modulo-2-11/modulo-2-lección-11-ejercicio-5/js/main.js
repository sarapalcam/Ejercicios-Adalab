"use strict";

// Paralelamente cada vez que la usuaria elija un tema, guardaremos esta información en localStorage.
// Al cargar la página buscaremos en localStorage el tema seleccionado en la última visita y lo aplicaremos sin que la usuaria tenga que realizar ninguna acción.

const body = document.querySelector(".js_body");
const form = document.querySelector(".js_form");

function handleClickTheme(ev) {
  const selectedTheme = ev.target.value;
  if (selectedTheme === "light") {
    body.classList.add("light");
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
  }
  localStorage.setItem("theme", selectedTheme);
}

function loadTheme() {
  const theme = localStorage.getItem("theme");
  if (theme.value === "light") {
    body.classList.add("light");
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
  }
}

form.addEventListener("click", handleClickTheme);
loadTheme();
