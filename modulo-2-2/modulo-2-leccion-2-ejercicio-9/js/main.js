'use strict'

const namePartner = 'Sara Palomo Campesino';

const body = document.querySelector('body');

const message = `<p>El nombre de mi conpñera es ${namePartner}, y está compuesto por ${namePartner.length} caracteres.`

body.innerHTML = message;