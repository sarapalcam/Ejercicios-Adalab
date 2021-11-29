'use strict'

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const body = document.querySelector('body');

body.innerHTML = `<ul>
    <li>
        <img src=${firstDogImage} alt="First dog image" title ="First dog image"></img>
        ${firstDogName}
    </li>
    <li>
        <img src=${secondDogImage} alt="Second dog image" title ="Second dog image"></img>
        ${secondDogName}
    </li>
    <li>
        <img src=${thirdDogImage} alt="Third dog image" title ="Third dog image"></img>
        ${thirdDogName}
    </li>
</ul>`