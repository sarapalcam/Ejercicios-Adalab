'use strict'

const nameAccess = 'Sara';
const body = document.querySelector('body');

if (nameAccess === 'Sara') {
    console.log(`Bienvenida, ${nameAccess}`);
    body.innerHTML = `<p>Bienvenida, ${nameAccess}</p>`
}

else {
    console.log('Lo siento pero el usuario que has introducido no está registrado.')
    body.innerHTML = `<p>Lo siento pero el usuario que has introducido no está registrado.</p>`
}

