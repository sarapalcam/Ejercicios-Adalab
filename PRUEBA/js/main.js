"use strict";

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

function renderTags(tags) {
  let htmlTags = `<ul class="item__tags">`;
  for (const tag of tags) {
    htmlTags += `<li class= "item__tag">${tag}</li>`;
  }
  return (htmlTags += `</ul>`);
}

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

for (const bookmark of bmkData) {
  html += renderBookmark(bookmark);
}

const searchInputs = document.querySelectorAll(".js_search_input");

const newBookmarkDataObject = {
  url: "",
  desc: "",
  tags: [],
};

function addNewBmk() {
  bmkData.push(newBookmarkDataObject);
  renderBookmark(bmkData);
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
