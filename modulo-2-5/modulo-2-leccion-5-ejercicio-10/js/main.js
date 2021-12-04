"use strict";

const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

const bodyHTML = document.querySelector(".js-body");
const btnStart = document.querySelector(".js-btn");

function showMovies() {
  bodyHTML.innerHTML += `<p>
  <ul>
      <li>${inception}</li>
      <li>${theButterFlyEffect}</li>
      <li>${eternalSunshineOfTheSM}</li>
      <li>${blueVelvet}</li>
      <li>${split}</li>
  </ul>
</p>`;
}

function selectMovie(event) {
  const selectedMovie = event.currentTarget;
  if (selectedMovie !== "") {
    console.log(selectedMovie);
  }
}

btnStart.addEventListener("click", showMovies);

inception.addEventListener("click", selectMovie);

/* No sé cómo hacer la segunda parte de este ejericio */
