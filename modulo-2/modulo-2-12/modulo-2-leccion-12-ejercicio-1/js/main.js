"use strict";

const list = document.querySelector(".js_list");
const numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
  const newListEl = document.createElement("li");
  const newListContent = document.createTextNode(numbers[i]);
  newListEl.appendChild(newListContent);
  list.appendChild(newListEl);
}

// Si tenemos <input type="text" name="firstname" id="firstname" value="Ada">
const nameInput = document.querySelector("#firstname");

console.log(nameInput.value); // Pintará el valor actual, 'Ada'
nameInput.value = "Joan"; // Rellenará el input con el valor 'Joan'

/*
Para poner un estilo, lo asignaremos usando la siguiente notación
style.propiedadCSS = 'valor'

De esta forma no modificaremos los estilos previamente asignados

Si la propiedad CSS tiene un guión (background-color) lo convertiremos a camelcase
backgroundColor
*/
nameInput.style.backgroundColor = "red";

/*
Si queremos poner varios estilos a la vez o sobreescribir los anteriores,
usaremos esta notación
*/
nameInput.style = "color: red; color: blue;";

// Si tenemos <label class="firstname-label" for="firstname"></label>
const label = document.querySelector(".firstname-label");
label.getAttribute("for"); // devolverá firstname

// Si tenemos <label class="firstname-label"></label>
const label = document.querySelector(".firstname-label");
label.setAttribute("for", "firstname"); // asignará for="firstname" al label
