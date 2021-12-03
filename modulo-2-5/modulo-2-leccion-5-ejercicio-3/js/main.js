"use strict";

const textLorem = document.querySelector(".js-text");

function addLorem() {
  textLorem.innerHTML +=
    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi animi quia ipsa dolores est voluptate reiciendis omnis velit dolorem ea, consectetur ullam fuga sequi. Aut sunt iste similique maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorem quis dolor officia vitae saepe, ea optio quam officiis accusamus corrupti voluptates. Necessitatibus dignissimos illum optio, ea itaque nam delectus.</p>";
}

textLorem.addEventListener("mouseover", addLorem);
