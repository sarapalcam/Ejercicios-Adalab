"use strict"

const inputs = document.querySelectorAll('.js_input');
const info = {};

function handleChangeInputs(ev){
    const inputId = ev.currentTarget.id;
    info[inputId] = ev.currentTarget.value;

}

for (const input of inputs){
    input.addEventListener("change", handleChangeInputs) //También se puede utilizar "keyup"
}

/********************************/

const btn = document.querySelector('.js_btn');
const infoArray = [];

function handleClickBtn(ev){
    ev.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    infoArray.push(nombre);
    const apellido = document.querySelector("#apellido").value;
    infoArray.push(apellido);
    for (const element of infoArray){
        console.log(element);
    }
}//Para hacerlo con una única función, hay que hacerlo de forma similar al anterior ejemplo, con dqsAll, recorer e ir metiendo en el array, etc.

btn.addEventListener("click", handleClickBtn)