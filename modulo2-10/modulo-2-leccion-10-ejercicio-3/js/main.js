"use strict";

const btn = document.querySelector(".js_btn");
const input = document.querySelector(".js_input");

function getInputValue() {
  console.log(input.value);
  return input.value;
}

function showResultsTitles() {
  const resultsTitle = document.querySelector(".js_results-title");
  const nameTitle = document.querySelector(".js_name-title");
  const imgTitle = document.querySelector(".js_img-title");
  const reposTitle = document.querySelector(".js_repos-title");
  resultsTitle.classList.remove("hidden");
  nameTitle.classList.remove("hidden");
  imgTitle.classList.remove("hidden");
  reposTitle.classList.remove("hidden");
}

function getUserInfo() {
  const user = getInputValue();
  fetch(`https://api.github.com/users/${user}`)
    .then((response) => response.json())
    .then((data) => {
      const name = document.querySelector(".js_name");
      name.innerHTML = data.login;
      const img = document.querySelector(".js_img");
      img.src = data.avatar_url;
      const repos = document.querySelector(".js_repos");
      repos.innerHTML = data.public_repos;
    });
}

function handleClickBtn(event) {
  event.preventDefault();
  getInputValue();
  showResultsTitles();
  getUserInfo();
}

btn.addEventListener("click", handleClickBtn);
