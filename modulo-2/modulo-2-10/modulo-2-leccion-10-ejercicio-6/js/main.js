"use strict";

const dogImage = document.querySelector(".js_dog_image");

function getRandomDog() {
  //Pedir la lista de razas
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((breedsData) => {
      const breeds = Object.keys(breedsData.message); //Estudiar esto de Object.keys: recoge el nombre del objeto
      //Tomar una aleatoria, mostrar un mensaje que diga la raza
      return fetch("https://api.rand.fun/number/integer?max=94")
        .then((numberResponse) => numberResponse.json())
        .then((numberData) => {
          const randomNumber = numberData.result; //Mirar siempre en el navegador la info de la api para saber el nombre del elemento al que tengo que acceder, en este caso https://api.rand.fun/number/integer?max=94
          const dogBreed = breeds[randomNumber]; //Podemos acceder a breeds porque estamos haciendo este fetch dentro de un then del primer fetch
          console.log(dogBreed);
          //Pintar una imagen de esa raza aleatoria
          return fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
            .then((imgResponse) => imgResponse.json())
            .then((imgData) => {
              dogImage.innerHTML = `<img src=${imgData.message}><p>${dogBreed}</p>`;
            });
        });
    });
}

document.addEventListener("click", getRandomDog);

// Si has llegado hasta aquí te proponemos otro reto, intenta que la última función sea la única que se encargue de interactuar con html, y sea esta la que pinte la raza y la imagen. ¡Al turrón
