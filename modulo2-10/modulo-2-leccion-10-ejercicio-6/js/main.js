"use strict";

function getRandomDog() {
  //Pedir la lista de razas
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((breedsData) => {
      console.log(breedsData);
      const breeds = Object.keys(breedsData.message); //Estudiar esto de Object.keys: recoge el nombre del objeto
      console.log(breeds);
      console.log(breeds.length);
      //Tomar una aleatoria, mostrar un mensaje que diga la raza
      return fetch("https://api.rand.fun/number/integer?max=94")
        .then((numberResponse) => numberResponse.json())
        .then((numberData) => {
          const randomNumber = numberData.result; //Mirar siempre en el navegador la info de la api para saber el nombre del elemento al que tengo que acceder, en este caso https://api.rand.fun/number/integer?max=94
          const dogBreed = breeds[randomNumber]; //Podemos acceder a breeds porque estamos haciendo este fetch dentro de un then del primer fetch
          console.log(randomNumber);
          console.log(dogBreed);
          //Pintar una imagen de esa raza aleatoria
        });
    });
}

document.addEventListener("click", getRandomDog);
