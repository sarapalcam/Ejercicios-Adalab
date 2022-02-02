//Importar dependencias
const express = require("express");
const cors = require("cors");

//Crear servidor
const server = express();

//Configurar servidor
server.use(cors());
server.use(express.json());

//Iniciar el servidor
const serverPort = 3001;
server.listen(serverPort, () =>
  console.log(`Server listening at http://localhost:${serverPort}`)
);

//API
//GET: obtener/devolver datos de la aplicación
//POST: enviar datos/nueva información a la aplicación, hacer peticiones de un dato concreto (ej.: todos los pedidos de un usuariom hay que mandarel usuario)
//PUT: actualizar datos
//DELETE: eliminar datos
server.get("/", (req, res) => {
  res.send("<html><body><h1>Hola</h1></body></html>");
  res.send(console.log("hi"));
});

server.get("/users", (req, res) => {
  console.log(req.query);
  const response = {
    users: [
      { name: "Isa", age: 40 },
      { name: "Norma", age: 36 },
    ],
  };
  const filteredData = response.users.filter(
    (user) => user.name === req.query.name
  );
  if (filteredData.length === 0) {
    res.send(console.log("not found"));
  } else {
    //Si sabemos que lo que mandamos es un listado en formato de objetos, lo mandamos en formato JSON
    res.json(filteredData);
  }
});

//NUNCA ES RECOMENDABLE TENER EL MISMO NOMBRE DERUTA AUNQUE UNO SEA GET Y OTRO POST. SIEMPRE TIENEN QUE TENER NOMBRES DISTINTOS Y DESCRIPTIVOS. POR EJEMPLO EL SIGUIENTE EJEMPLO PODRÍA SER "/users-add"
// server.post("/users", (req, res) => {
//     const users = {
//         users: [{name: "Isa"}, {name: "Norma"}]
//     };
//     //Si sabemos que lo que mandamos es un listado en formato de objetos, lo mandamos en formato JSON
//     res.json(users);
// })
