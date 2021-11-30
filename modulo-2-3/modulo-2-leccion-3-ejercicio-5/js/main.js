"use strict";

const warningMessage = document.querySelector(".js-warning-message");

if (warningMessage.classList.contains("warning")) {
  warningMessage.innerHTML = `<h1 class="title">Aviso</h1>
    <p>Tenga cuidado</p>`;
} else if (warningMessage.classList.contains("error")) {
  warningMessage.innerHTML = `<h1 class="title">Error</h1>
    <p>Ha surgido un error</p>`;
} else if (warningMessage.classList.contains("success")) {
  warningMessage.innerHTML = `<h1 class="title">Correcto</h1>
    <p>Los datos son correctos</p>`;
}
