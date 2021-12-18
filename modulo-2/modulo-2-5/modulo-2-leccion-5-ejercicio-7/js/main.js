"use strict";

const btnCreate = document.querySelector(".js-btn-create");
const btnDelete = document.querySelector(".js-btn-delete");

function toggleBtn(event) {
  const selectedBtn = event.currentTarget;
  selectedBtn.classList.toggle("btn-off");
}

btnCreate.addEventListener("click", toggleBtn);
btnDelete.addEventListener("click", toggleBtn);
