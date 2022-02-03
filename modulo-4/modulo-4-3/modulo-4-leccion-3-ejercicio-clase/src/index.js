//importar dependencias
const express = require("express");
const cors = require("cors");
const fs = require("fs");

//crear el servidor
const server = express();

//Configurar el servidor
server.use(cors());
server.use(express.json());
//Servidor de estáticos


//iniciar el servidor
const serverPort = 3001;
server.listen(serverPort, () =>
  console.log(`Server listening ah http://localhost:${serverPort}`)
);

//API
//GET: obtener/devolver datos de la aplicación
//POST: enviar datos
//PUT: actualizar datos
//DELETE: eliminar datos

server.get("/", (req, res) => {
  console.log("Petición a la ruta GET /");
  res.send("<html><body><h1>Hola</h1></body></html>");
});

const users = [
  {
    name: "Sara",
    email: "sara.pal.cam@gmail.com",
    age: 29,
    password: "ehquepasa",
  },
  {
    name: "Carlos",
    email: "superdn@gmail.com",
    age: 32,
    password: "tonypepperonni",
  },
];

//Listado de usuarios
server.get("/users", (req, res) => {
  console.log("Petición a la ruta GET /users");
  console.log(req.query);
  res.json(users);
});

//Agregar usuarios
server.post("/user/add", (req, res) => {
  console.log("Petición a la ruta POST user/add");
  const nameUser = req.body.name;
  users.push({ name: nameUser });
  res.json({ succes: true, result: `user created ${nameUser}` });
});

//Crear fichero
const handleWrite = (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created");
  }
};

//Descargar usuarios. NO FUNCIONA, VER POR QUÉ
server.get("users/export", (req, res) => {
  fs.writeFile(".users.json", JSON.stringify(users), handleWrite);
  res.download(__dirname + "/users.json", "Listado.json");
});
