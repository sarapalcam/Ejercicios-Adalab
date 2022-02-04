const express = require("express");
const cors = require("cors");
const contactsData = require("./data/contacts.json");

//Crear el servidor
const server = express();

//Configurar el servidor
server.use(cors());
server.use(express.json());

//Iniciar el servidor
const serverPort = 3000;
server.listen(serverPort, () => console.log(`Server listening at http://localhost:${serverPort}`));

//Configurar el servidor de estáticos: 
const staticServerPath = "./public"
server.use(express.static(staticServerPath));

//Api Endpoints

//GET /login ? email & pass
server.post("/login", (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;

    if (!email || !pass) {
        res.sendStatus(404)
    } else {
        if (email === "ivan@adalab.es" && pass === "1234") {
            res.json({ userId: "13454555" });
        } else {
            res.json({ error: "Error " });
        }
    }

});

server.get("/contacts", (req, res) => {
    console.log(req.headers());
   const userId=req.header("userid");
    if(userId !== ""){
        res.json(contactsData)
    }else{
        res.json({success: false, message: "usuario no encontrado"})
    }
    
});


