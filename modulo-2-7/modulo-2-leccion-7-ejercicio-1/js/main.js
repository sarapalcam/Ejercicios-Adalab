"use strict";

function workWithMovies() {
  const movies = [
    "Herz aus Glas",
    "Me, Earl and the dying girl",
    "Amanece que no es poco",
  ];

  movies[3] = "El Señor de los Anillos";

  console.log(movies);

  movies[1] = "Dos tontos muy tontos";

  console.log(movies);

  movies[2] = "Seven";

  console.log(movies);
}

console.log(workWithMovies());
