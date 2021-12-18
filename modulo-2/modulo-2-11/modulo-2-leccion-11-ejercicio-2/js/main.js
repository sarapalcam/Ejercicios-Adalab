"use strict";

const input = document.querySelector('.js_input');
const btnSearch = document.querySelector('.js_btn');
const resultList = document.querySelector('.js_list');

function getInputValue(){
    const inputValue = input.value;
    const inputValueLC = inputValue.toLowerCase();
    const firstCharCapitalidez = inputValueLC.charAt(0).toUpperCase();
    const inputCapitalized = firstCharCapitalidez + inputValue.slice(1);
    return inputCapitalized;
}

function getPeopleList(){
    resultList.innerHTML = "";
    const inputValue = getInputValue();
    for (let peopleNumber = 1; peopleNumber <= 88; peopleNumber++){
        fetch(`https://swapi.py4e.com/api/people/${peopleNumber}`)
        .then(response => response.json())
        .then(data => {
            const dataName = data.name;
            if (dataName.includes(inputValue)){
                resultList.innerHTML += `<li>${dataName}: ${data.gender}</li>`;
            }
        })
    }
   
};

function handleClickSearch(ev) {
    ev.preventDefault();
    getInputValue();
    getPeopleList();
};

function handleEnterSearch(ev){
    ev.preventDefault();
    if (ev.key === "Enter"){
    getInputValue();
    getPeopleList();
}
}

btnSearch.addEventListener("click", handleClickSearch);
input.addEventListener("keyup", handleEnterSearch);