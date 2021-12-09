"use strict";

const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

const moviesList = document.querySelector(".js-moviesList");
const btnStart = document.querySelector(".js-btn");

function showMovies() {
  moviesList.innerHTML += ` <li>${inception}</li>
      <li>${theButterFlyEffect}</li>
      <li>${eternalSunshineOfTheSM}</li>
      <li>${blueVelvet}</li>
      <li>${split}</li>
  </ul>
`;
}

function selectMovie(event) {
  const eventTarget = event.target.innerText;
  console.log(`Has seleccionado la película ${eventTarget}`);
}

btnStart.addEventListener("click", showMovies);
moviesList.addEventListener("click", selectMovie);
