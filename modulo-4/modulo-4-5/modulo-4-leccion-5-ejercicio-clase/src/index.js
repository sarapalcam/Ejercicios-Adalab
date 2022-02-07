const express = require("express");
const cors = require("cors");
const contactsData = require("./data/contacts.json");
const DataBase = require("better-sqlite3");

//Crear el servidor
const server = express();

//Configurar el servidor
server.use(cors());
server.use(express.json());

//Iniciar el servidor
const serverPort = 3000;
server.listen(serverPort, () => console.log(`Server listening at http://localhost:${serverPort}`));

const db = DataBase("./src/linkedin.db", {verbose: console.log})

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
        const query = db.prepare("SELECT * FROM users WHERE pass = ? and email = ?");
        const foundUser = query.get(pass, email);
        if (foundUser !== undefined){
            res.json({success: true, userId: foundUser.id})
        } else {
            res.json( {error: 'Error'})
        }
      
    }

});

server.get("/contacts", (req, res) => {
   const query = db.prepare("SELECT * FROM contacts ORDER BY name");
   const contactsData = query.all();
   const userId=req.header("userid");
    if(userId !== ""){
        res.json(contactsData)
    }else{
        res.json({success: false, message: "usuario no encontrado"})
    }
    
});


