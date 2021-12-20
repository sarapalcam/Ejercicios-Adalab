"use strict";

const input = document.querySelector(".js_input");
const btnSearch = document.querySelector(".js_btn");
const resultList = document.querySelector(".js_list");

function getInputValue() {
  const inputValue = input.value; 
  return inputValue;
}

function getPeopleList() {
  resultList.innerHTML = "";
  const inputValue = getInputValue();
    fetch(`https://swapi.py4e.com/api/people/?search=${inputValue}`) 
      .then((response) => response.json())
      .then((data) => {   
        console.log(data);
        const gender = data.results[0].gender;
        const name = data.results[0].name;
        resultList.innerHTML += `<li>${name}: ${gender}</li>`
      });
  }

function handleClickSearch(ev) {
  ev.preventDefault();
  getInputValue();
  getPeopleList();
}
function handleEnterSearch(ev) {
  ev.preventDefault();
  if (ev.key === "Enter") {
    getInputValue();
    getPeopleList();
  }
}

btnSearch.addEventListener("click", handleClickSearch);
input.addEventListener("keyup", handleEnterSearch);

