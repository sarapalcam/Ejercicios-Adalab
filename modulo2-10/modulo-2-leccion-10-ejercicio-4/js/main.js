"use strict";

const btn = document.querySelector(".js_btn");
const input = document.querySelector(".js_input");

function getInputValue() {
  console.log(input.value);
  return input.value;
}

function getOrgInfo() {
  const orgname = getInputValue();
  fetch(`https://api.github.com/orgs/${orgname}`)
    .then((orgsResponse) => orgsResponse.json())
    .then((reposData) => {
      const repos = reposData.repos_url;
      return fetch(`https://api.github.com/orgs/${orgname}/repos`)
      .then((reposResponse) => reposResponse.json())
      .then((reposList => {
          let html = "";
          for (const repo of reposList){
            html += `<li>${repo}</li>`;
          }
          let ul = document.querySelector('.js_ul');
          ul += html;
        }));


function handleClickBtn(event) {
  event.preventDefault();
  getInputValue();
  getOrgInfo();
}

btn.addEventListener("click", handleClickBtn);

// function getBreedsImage() {
//   fetch("https://dog.ceo/api/breeds/list")
//     .then((breedsResponse) => breedsResponse.json())
//     .then((breedsData) => {
//       const breeds = breedsData.message;
//       return fetch("https://dog.ceo/api/breed/" + breeds[0] + "/images/random");
//     })
//     .then((imageResponse) => imageResponse.json())
//     .then((imageData) => {
//       const img = document.querySelector("img");
//       img.src = imageData.message;
//       img.alt = "Un perro";
//     });
// }
// const btn = document.querySelector(".js-btn");
// btn.addEventListener("click", getBreedsImage);
