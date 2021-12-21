"use strict";

const linkTeam = document.querySelector(".js-link-team");
const linkWho = document.querySelector(".js-link-who");
const linkContact = document.querySelector(".js-link-contact");
const textTeam = document.getElementById("equipo");
const textWho = document.getElementById("quienes-somos");
const textContact = document.getElementById("contacto");

// teamPosition.height = "-100px";

function handleClickScrollTeam() {
  const teamPosition = textTeam.getBoundingClientRect();
  console.log(teamPosition);
  window.scrollTo(0, window.scrollY + teamPosition.top - 100);
}

function handleClickScrollWho() {
  const whoPosition = textWho.getBoundingClientRect();
  console.log(whoPosition);
  window.scrollTo(0, window.scrollY + whoPosition.top - 100);
}

function handleClickScrollContact() {
  const contactPosition = textContact.getBoundingClientRect();
  console.log(contactPosition);
  window.scrollTo(0, window.scrollY + contactPosition.top - 100);
}

function preventLink(event) {
  event.preventDefault();
  console.log("El preventDefault ha funcionado");
}

linkTeam.addEventListener("click", preventLink);
linkWho.addEventListener("click", preventLink);
linkContact.addEventListener("click", preventLink);

linkTeam.addEventListener("click", handleClickScrollTeam);
linkWho.addEventListener("click", handleClickScrollWho);
linkContact.addEventListener("click", handleClickScrollContact);
