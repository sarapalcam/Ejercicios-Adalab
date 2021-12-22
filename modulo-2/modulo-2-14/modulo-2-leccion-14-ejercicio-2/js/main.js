'user strict';

// let counter = 0;

// const incrementAndShowCounter = () => {
//   counter++;
//   const time = document.querySelector('.time');
//   console.log(counter);
//   if (counter <= 12){
//         time.innerHTML = counter;
//         const newImgEl = document.createElement("img");
//         newImgEl.src = "https://www.nicepng.com/png/full/8-82693_kawaii-grape-png-jpg-transparent-cute-grapes-png.png";
//         newImgEl.style.height = "150px";
//         newImgEl.style.width = "150px";
//         const img = document.querySelector('.js-img');
//         img.appendChild(newImgEl);
//     } 
// };

// setInterval(incrementAndShowCounter, 1000);

//Con clearInterval: ejercicio 5
let counter = 0;
let temp;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  console.log(counter);
        time.innerHTML = counter;
        const newImgEl = document.createElement("img");
        newImgEl.src = "https://www.nicepng.com/png/full/8-82693_kawaii-grape-png-jpg-transparent-cute-grapes-png.png";
        newImgEl.style.height = "150px";
        newImgEl.style.width = "150px";
        const img = document.querySelector('.js-img');
        img.appendChild(newImgEl);
    if (counter === 12){
      clearInterval(temp);
    }
};

temp = setInterval(incrementAndShowCounter, 1000);