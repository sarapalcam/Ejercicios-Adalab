const fs = require('fs');
const read = require('./modules/readFiles');
const write = require('./modules/writeFiles');

// fs.writeFile(ficheroLeer, tipoDeDatos, funciónManejadora)
fs.readFile('./adalabers.csv', 'utf-8', read.handleRead);


//////Escribir en ficheros
const adalaber = {
    name: 'Sandra',
    lastname: 'Gutiérrez',
    age: 30
};


// fs.writeFile(ficheroGuardar, quéQuieroGuardar, funciónManejadora)
fs.writeFile('./newFile.txt', JSON.stringify(adalaber), write.handleWrite);

fs.readFile('./newFile.txt', 'utf-8', read.handleReadJson);

//Para guardar un objeto lo paso a string, para leerlo lo parseo a objeto