# DOM

## Traer elementos esde HTML a JS

```js
elemento = document.querySelector("selector"); //uno
elemento = document.querySelectorAll("selector"); //listado

elemento = document.getElementById("identificador"); //uno
```

## Modificar este elemento

```js
elemento.classList.contains().add().remove().toggle();
```

## Cambier contenido de los elementos

```js
elemento.innerHTML = "<p>Nuevo elemento</p>"; //elementos html que abren y cierran
elemento.value = "Nuevo valor"; //elementos html de autocierre
```

## Cambiar propiedades

```js
elemento.id;
elemento.style; //no recomendable usarlo
elementoImg.src = "/nuevaImagen";
elementoLink.href = "/nuevoLink";
if (elementoInput.type === "radio");
```

## Acceder a contenedor madre

```js
elemento.parentElement;
elemento.parentNode;
//A efectos prácticos son lo mismo. Se diferencia en que el html no tiene parentElement, y su parentNode es el DOM
```

## DOM AVANZADO

### Crear y añadir nuevos elementos

```js
const newElement = document.createElement("div"); //crear un elemento de html
const newText = document.createTextNode("lorem"); //crear el texto para el elemento
newElement.appendChild(newText); //añadir ese texto a mi elemento
html.appendChild(element); //añadirlo al html
//appendChild siempre te pone el elemento al final y sólo se puede insertar un elemento con él
```
