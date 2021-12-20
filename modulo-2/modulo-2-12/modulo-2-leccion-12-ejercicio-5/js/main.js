"use strict";

const linkTeam = document.querySelector(".js-link-team");
const linkWho = document.querySelector(".js-link-who");
const linkContact = document.querySelector(".js-link-contact");
const textTeam = document.getElementById("equipo");
const textWho = document.getElementById("quienes-somos");
const textContact = document.getElementById("contacto");

const teamPosition = textTeam.getBoundingClientRect();
const whoPosition = textWho.getBoundingClientRect();
const contactPosition = textContact.getBoundingClientRect();

function handleClickScrollTeam() {
  window.scrollTo(teamPosition);
}

function handleClickScrollWho() {
  window.scrollTo(whoPosition);
}

function handleClickScrollContact() {
  window.scrollTo(contactPosition);
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

//Tengo que intentar hacer funciones que unifiquen todo y restar el alto del header
