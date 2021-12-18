"use strict";

const input = document.querySelector('.js_input');
const text = document.querySelector('.js_text');

function getInputValue(){
    return input.value;
}

function renderInput(){
    getInputValue();
    text.innerHTML = `${input.value}`;
}

function saveValue(){
    localStorage.setItem("name", JSON.stringify(getInputValue()));
}

function handleKeyupInput(){
    getInputValue();
    renderInput();
    saveValue();   
}

function autocomplete(){
    const name = JSON.parse(localStorage.getItem("name"));
    input.value = name;
    text.innerHTML = name;
}

autocomplete();
    
input.addEventListener("keyup", handleKeyupInput);
