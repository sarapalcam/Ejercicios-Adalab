//importar dependencias
const express = require("express");
const cors = require("cors");

//crear el servidor
const server = express();

//Configurar el servidor
server.use(cors());
server.use(express.json());

//iniciar el servidor
const serverPort = 4000;
server.listen(serverPort, () =>
  console.log(`Server listening ah http://localhost:${serverPort}`)
);

//API
server.post("/login", (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;
  if (!email || !pass) {
    res.status(404);
    res.json({ success: false, error: "Faltan datos" });
  } else {
      if(email === "ivan@adalab.es" && pass === "12345"){
        res.json({ success: true, userId: "dfwjei356" });
      } else {
        res.json({ success: false, error: "Error en el login" });
      }
  }
});
