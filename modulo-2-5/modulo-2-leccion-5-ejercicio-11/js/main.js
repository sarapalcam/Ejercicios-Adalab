"use strict";

const linkTeam = document.querySelector(".js-link-team");
const linkWho = document.querySelector(".js-link-who");
const linkContact = document.querySelector(".js-link-contact");

function preventLink(event) {
  event.preventDefault();
  console.log("El preventDefault ha funcionado");
}

linkTeam.addEventListener("click", preventLink);
linkWho.addEventListener("click", preventLink);
linkContact.addEventListener("click", preventLink);
