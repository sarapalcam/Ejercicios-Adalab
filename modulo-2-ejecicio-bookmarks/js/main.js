"use strict";

const menuDropdown = document.querySelector(".js_menu_dropdown");
const linkDropdown = document.querySelector(".js_link_dropdown");
const sectionAdd = document.querySelector(".js_section_add");
const buttonAdd = document.querySelector(".js_button_add");
const boardData = document.querySelector(".js_boarddata");
const listData = document.querySelector(".js_list_data");
const buttonShowCardview = document.querySelector(".js_cardview_button");
const buttonShowTable = document.querySelector(".js_table_button");

const bmkData1 = {
  url: "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion",
  desc: "JS en los materiales de Adalab",
  seen: false,
  tag1: "",
  tag2: "",
};

const bmkData2 = {
  url: "https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/",
  desc: "Ideas de proyectos JS",
  seen: true,
  tag1: "",
  tag2: "",
};

const bmkData3 = {
  url: "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web",
  desc: "HTML en los materiales de Adalab",
  seen: true,
  tag1: "",
  tag2: "",
};

function renderTags(tag1, tag2) {
  let htmlTags = `<ul class="item__tags">`;
  if (tag1 !== "" && tag2 !== "") {
    htmlTags = ` <ul class="item__tags">
          <li class="item__tag">${tag1}</li>
          <li class="item__tag">${tag2}</li>
        </ul>`;
  } else if (tag1 !== "" && tag2 === "") {
    htmlTags = ` <ul class="item__tags">
          <li class="item__tag">${tag1} 1</li>
        </ul>`;
  } else if (tag1 === "" && tag2 === "") {
    htmlTags = ` <p class="item__tags">No tiene</p>`;
  }
  return htmlTags;
}

function renderBookmark(bmkData) {
  const htmlTags = renderTags(bmkData.tag1, bmkData.tag2);
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

let html = renderBookmark(bmkData1);
html += renderBookmark(bmkData2);
html += renderBookmark(bmkData3);

listData.innerHTML = html;

function setCardListView() {
  boardData.classList.remove("tableview");
  boardData.classList.add("listview");
}

function setTableView() {
  boardData.classList.remove("listview");
  boardData.classList.add("tableview");
}

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

function showAddForm() {
  sectionAdd.classList.remove("hidden");
}

linkDropdown.addEventListener("click", handleClickLinkDropdown);

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

buttonShowCardview.addEventListener("click", handleClickShowCardview);
buttonShowTable.addEventListener("click", handleClickShowTable);

buttonAdd.addEventListener("click", showAddForm);
