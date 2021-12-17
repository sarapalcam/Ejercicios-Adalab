"use strict";

const btnSearch = document.querySelector(".js_btn");
const input = document.querySelector(".js_input");

//Llamar a datos de la organización

//Llamar a repos url

//Pintar el name de los repos

function getInputValue() {
  return input.value;
}

function getOrgData() {
  const orgName = getInputValue();
  console.log(orgName);
  fetch(`https://api.github.com/orgs/${orgName}`)
    .then((response) => response.json())
    .then((dataOrg) => {
      console.log(dataOrg);
      return fetch(dataOrg.repos_url)
        .then((reposResponse) => reposResponse.json())
        .then((reposData) => {
          console.log(reposData);
          // let listUl = document.querySelector(".js_ul");
          // listUl.innerHTML += `<li>${reposData.name}</li>`;
          let listUl = document.querySelector(".js_ul");
          let listElement = "";
          for (const repo of reposData) {
            console.log(repo.name);
            listElement += `<li>${repo.name}</li>`;
          }
          listUl.innerHTML = listElement;
        });
    });
}
function handleClickBtn() {
  getInputValue();
  getOrgData();
}

btnSearch.addEventListener("click", handleClickBtn);
