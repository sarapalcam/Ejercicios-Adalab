"use strict";

//Lista de variables globales: selectores de HTML
const menuDropdown = document.querySelector(".js_menu_dropdown");
const linkDropdown = document.querySelector(".js_link_dropdown");
const sectionAdd = document.querySelector(".js_section_add");
const buttonAdd = document.querySelector(".js_button_add");
const boardData = document.querySelector(".js_boarddata");
const listData = document.querySelector(".js_list_data");
const buttonShowCardview = document.querySelector(".js_cardview_button");
const buttonShowTable = document.querySelector(".js_table_button");
const saveBtn = document.querySelector(".js_save_btn");

//Variable en la que meteremos toda la información de los bookmarks al pintarla
let html = "";

//Lista de los bookmarks disponibles
const bmkData = [
  {
    url: "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion",
    desc: "JS en los materiales de Adalab",
    seen: false,
    tags: ["javascript"],
  },
  {
    url: "https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/",
    desc: "Ideas de proyectos JS",
    seen: true,
    tags: [],
  },
  {
    url: "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web",
    desc: "HTML en los materiales de Adalab",
    seen: true,
    tags: ["html", "css"],
  },
];

//Función que nos pinta las etiquetas de los bookmars
function renderTags(tags) {
  let htmlTags = `<ul class="item__tags">`;
  for (const tag of tags) {
    htmlTags += `<li class= "item__tag">${tag}</li>`;
  }
  return (htmlTags += `</ul>`);
}

//Función que nos recoge en una variable los datos de los bookmars
function renderBookmark(bmkData) {
  const htmlTags = renderTags(bmkData.tags);
  const htmlBookmark = `
    <li class="data__listitem">
      <article class="data__item">
        <p class="item__url">
          <a href="${bmkData.url}" target="_blank" rel="noopener noreferrer">
            ${bmkData.url}
          </a>
        </p>
        <p class="item__seen">
          <input type="checkbox" ${bmkData.seen} name="item_seen_2" id="item_seen_2">
        </p>
        <p class="item__desc">${bmkData.desc}</p>
        ${htmlTags}
      </article>
    </li>
    `;
  return htmlBookmark;
}

//Bucle que nos introduce en la variable HTML los datos de los bookmars
for (const bookmark of bmkData) {
  html += renderBookmark(bookmark);
}

//Pintamos los datos de los bookmarks
listData.innerHTML = html;

//Funciones para cambiar la vista de los resultados a tabla o tarjetas
function setCardListView() {
  boardData.classList.remove("tableview");
  boardData.classList.add("listview");
}

function setTableView() {
  boardData.classList.remove("listview");
  boardData.classList.add("tableview");
}

//Funciones que nos muestran o nos ocultan el menú hamburgesa
function showDropDownMenu() {
  menuDropdown.classList.remove("collapsed");
}

function hideDropDownMenu() {
  menuDropdown.classList.add("collapsed");
}

function toggleDropDownMenu() {
  if (menuDropdown.classList.contains("collapsed")) {
    showDropDownMenu();
  } else {
    hideDropDownMenu();
  }
}

//FUNCIONES MANEJADORAS DE EVENTOS

//Función que nos muestra el formulario para crear un nuevo bookmark
function showAddForm() {
  sectionAdd.classList.remove("hidden");
}

function handleClickLinkDropdown(event) {
  event.preventDefault();
  toggleDropDownMenu();
}

function handleClickShowCardview(event) {
  event.preventDefault();
  setCardListView();
  buttonShowTable.classList.remove("selected");
  buttonShowCardview.classList.add("selected");
}

function handleClickShowTable(event) {
  event.preventDefault();
  setTableView();
  buttonShowCardview.classList.remove("selected");
  buttonShowTable.classList.add("selected");
}

// Esta función obtiene los valores de cada uno de los inputs, crea un nuevo objeto newBookmarkDataObject que agregaremos al listado de enlaces con la siguiente línea de código:

// bmkData.push(newBookmarkDataObject);
// Recuerda limpiar los valores de los inputs y volver a ocultar la sección del formulario.

const searchInputs = document.querySelectorAll(".js_search_input");

const newBookmarkDataObject = {
  url: "",
  desc: "",
  tags: [],
};

function addNewBmk() {
  bmkData.push(newBookmarkDataObject);
  // renderBookmark(bmkData);
 // listData.innerHTML += html;
}

function getInputsSearch() {
  for (const input of searchInputs) {
    if (input.name === "new_dir") {
      newBookmarkDataObject.url = input.value;
    } else if (input.name === "new_desc") {
      newBookmarkDataObject.desc = input.value;
    } else if (input.name === "new_tags") {
      newBookmarkDataObject.tags.push(input.value);
    }
  }
  addNewBmk();
}
//NO FUNCIONA: REVISAR SI ESTOY METIENDO BIEN LOS DATOS EN EL OBJETO Y SI NO PEDIR TUTORÍA

function saveNewBookmark(event) {
  event.preventDefault();
  getInputsSearch();
}

//Eventos
linkDropdown.addEventListener("click", handleClickLinkDropdown);
buttonShowCardview.addEventListener("click", handleClickShowCardview);
buttonShowTable.addEventListener("click", handleClickShowTable);
buttonAdd.addEventListener("click", showAddForm);
saveBtn.addEventListener("click", saveNewBookmark);


