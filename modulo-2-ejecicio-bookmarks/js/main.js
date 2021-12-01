"use strict";

/* Dia 1*/
/* 1- Prueba mostrar formulario nuevo bookmark */
/* 2- Prueba mostrar menu */
/* 3- Añadir informacion de los enlaces desde JS
    3.1 Traer el elemento html
    3.2 Variable que contenga toda la información del li por cada uno de los enlaces
    3.3 Añadir esa info con el innerHTML por cada uno de los enlaces
*/

// const menuDropdown = document.querySelector(".js-menudropdown");
// const menuDataActions = document.querySelector(".js-data-actions__add");
// const dataList = document.querySelector(".js-data-list");
// const link1 = `<article class="data__item">
// <p class="item__url">
//   <a href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion" target="_blank" rel="noopener noreferrer">
//     books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion
//   </a>
// </p>
// <p class="item__seen">
//   <input type="checkbox" checked name="item_imp_2" id="item_imp_2">
// </p>
// <p class="item__desc">JS en los materiales de Adalab</p>
// <ul class="item__tags">
//   <li class="item__tag">javascript</li><li class="item__tag">HTML</li>
// </ul>
// </article>`;
// const link2 = `<article class="data__item">
// <p class="item__url">
//   <a href="https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/" target="_blank">thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/</a></a></p>
// <p class="item__seen">
//   <input type="checkbox" checked name="item_imp_1" id="item_imp_1">
// </p>
// <p class="item__desc">Ideas de proyectos JS</p>
// <ul class="item__tags">
//   <li class="item__tag">javascript</li><li class="item__tag">portfolio</li>
// </ul>
// </article>`;
// const link3 = `<article class="data__item">
// <p class="item__url">
//   <a href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web" target="_blank" rel="noopener noreferrer">books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web</a>
// </p>
// <p class="item__seen">
//   <input type="checkbox" name="item_imp_2" id="item_imp_2">
// </p>
// <p class="item__desc">HTML en los materiales de Adalab</p>
// <ul class="item__tags">
//   <li class="item__tag">HTML</li><li class="item__tag">CSS</li>
// </ul>
// </article>`;

// menuDropdown.classList.remove("collapsed");
// menuDataActions.classList.remove("hidden");
// dataList.innerHTML = link1;
// dataList.innerHTML += link2;
// dataList.innerHTML += link3;

/* DÍA 2*/

const menuDropdown = document.querySelector(".js-menudropdown");
const menuDataActions = document.querySelector(".js-data-actions__add");
const dataList = document.querySelector(".js-data-list");

const bmk1Url =
  "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion";
const bmk1Desc = "JS en los materiales de Adalab";
const bmk1Seen = "checked";
const bmk1Tags1 = "javascript";
let bmk1Tags2 = "HTML";
let html = `<article class="data__item">
<p class="item__url">
  <a href=${bmk1Url.replace(
    "https://",
    ""
  )} target="_blank" rel="noopener noreferrer">
  ${bmk1Url.replace("https://", "")}
  </a>
</p>
<p class="item__seen">
  <input type="checkbox" ${bmk1Seen} name="item_imp_2" id="item_imp_2">
</p>
<p class="item__desc">${bmk1Desc}</p>
<ul class="item__tags">
  <li class="item__tag">${bmk1Tags1}</li><li class="item__tag">${bmk1Tags2.toLowerCase()}</li>
</ul>
</article>`;

const bmk2Url =
  "https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/";
const bmk2Desc = "Ideas de proyectos JS";
const bmk2Seen = "checked";
const bmk2Tags1 = "javascript";
const bmk2Tags2 = "portfolio";
html += `<article class="data__item">
<p class="item__url">
  <a href="${bmk2Url.substr(
    8
  )}" target="_blank">thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/</a></a></p>
<p class="item__seen">
  <input type="checkbox" ${bmk2Seen} name="item_imp_1" id="item_imp_1">
</p>
<p class="item__desc">${bmk2Desc}</p>
<ul class="item__tags">
  <li class="item__tag">${bmk2Tags1}</li><li class="item__tag">${bmk2Tags2}</li>
</ul>
</article>`;

const bmk3Url =
  "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web";
const bmk3Desc = "HTML en los materiales de Adalab";
const bmk3Seen = "";
let bmk3Tags1 = "HTML";
let bmk3Tags2 = "CSS";
html += `<article class="data__item">
<p class="item__url">
  <a href=${bmk3Url.slice(
    8
  )} rel="noopener noreferrer">books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web</a>
</p>
<p class="item__seen">
  <input type="checkbox" ${bmk3Seen} name="item_imp_2" id="item_imp_2">
</p>
<p class="item__desc">${bmk3Desc}</p>
<ul class="item__tags">
  <li class="item__tag">${bmk3Tags1.toLowerCase()}</li><li class="item__tag">${bmk3Tags2.toLowerCase()}</li>
</ul>
</article>`;

menuDropdown.classList.remove("collapsed");
menuDataActions.classList.remove("hidden");
dataList.innerHTML = html;
