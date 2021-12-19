"use strict";

// const btnSearch = document.querySelector(".js_btn");
// const img = document.querySelector(".js_img_container");

// function searchCat() {
//   fetch("https://api.thecatapi.com/v1/images/search", {
//     headers: {
//       "x-api-key": "46699d88-6cb8-4469-82ac-337fc21f4f92",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data[0].url);
//       img.innerHTML = `<img src=${data[0].url}>`;
//     });
// }

// function handleClickSearch(ev) {
//   ev.preventDefault();
//   searchCat();
// }

// btnSearch.addEventListener("click", handleClickSearch);

///////////////////////////////

const btnSearch = document.querySelector(".js_btn");
const img = document.querySelector(".js_img_container");

function searchCat() {
  fetch("https://api.thecatapi.com/v1/images/search?mime_types=gif", {
    headers: {
      "x-api-key": "46699d88-6cb8-4469-82ac-337fc21f4f92",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].url);
      img.innerHTML = `<img src=${data[0].url}>`;
    });
}

function handleClickSearch(ev) {
  ev.preventDefault();
  searchCat();
}

btnSearch.addEventListener("click", handleClickSearch);
