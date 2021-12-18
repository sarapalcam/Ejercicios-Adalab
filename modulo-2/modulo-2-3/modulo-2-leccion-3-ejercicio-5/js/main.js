"use strict";

/*ASÍ LO HICE YO*/

/*const warningMessage = document.querySelector(".js-warning-message");

if (warningMessage.classList.contains("warning")) {
  warningMessage.innerHTML = `<h1 class="title">Aviso</h1>
    <p>Tenga cuidado</p>`;
} else if (warningMessage.classList.contains("error")) {
  warningMessage.innerHTML = `<h1 class="title">Error</h1>
    <p>Ha surgido un error</p>`;
} else if (warningMessage.classList.contains("success")) {
  warningMessage.innerHTML = `<h1 class="title">Correcto</h1>
    <p>Los datos son correctos</p>`;
}*/

/*ASÍ LO HIZO DAYANA*/
const title = document.querySelector(".js-title");
const message = document.querySelector(".js-message");
const warningMessage = document.querySelector(".js-warning-message");

if (warningMessage.classList.contains("warning")) {
  title.innerHTML = "Aviso";
  message.innerHTML = "Tenga cuidado";
} else if (warningMessage.classList.contains("error")) {
  title.innerHTML = "Error";
  message.innerHTML = "Ha surgido un error";
} else if (warningMessage.classList.contains("success")) {
  title.innerHTML = "Correcto";
  message.innerHTML = "Los datos son correctos";
}
