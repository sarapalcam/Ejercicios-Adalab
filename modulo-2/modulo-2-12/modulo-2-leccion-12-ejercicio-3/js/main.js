"use strict";

const selectForm = document.querySelector(".js_select");

const usersData = [
  {
    name: "Alicia",
    surname: "Aguilar",
    phone: "123456789",
  },
  {
    name: "Olivia",
    surname: "Oliver",
    phone: "987654321",
  },
  {
    name: "Carlos",
    surname: "Casar",
    phone: "135798642",
  },
];

function getSelectedValue(ev) {
  return ev.target.value;
}

function autocompleteForm(ev) {
  const selectedValue = getSelectedValue(ev);
  const inputs = document.querySelectorAll(".js_input");
  for (let i = 0; i < inputs.length; i++) {
    if (selectedValue === `user${i}`) {
      inputs[0].value = usersData[i].name;
      inputs[1].value = usersData[i].surname;
      inputs[2].value = usersData[i].phone;
    }
  }
}

function handleClickSelect(ev) {
  autocompleteForm(ev);
}

selectForm.addEventListener("change", handleClickSelect);
