"use strict";

function getNumber() {
  fetch("https://rand.fun/number/integer?min=0?&?max=100")
    .then((response) => response.json())
    .then(() => {
      document.querySelector(".js-result").innerHTML = data.result;
    });
}
document.querySelector(".js-number").addEventListener("click", getNumber);

//No sé por qué no sale
