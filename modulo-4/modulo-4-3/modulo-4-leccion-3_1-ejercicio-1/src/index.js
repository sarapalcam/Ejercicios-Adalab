const express = require("express");
const cors = require("cors");

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = "./public";
server.use(express.static(staticServerPath));

// users

const users = []; // fake users data base

// api endpoints

server.post("/user", (req, res) => {
  // add new user to daba base
  users.push({
    name: req.body.userName,
    email: req.body.userEmail,
  });
  res.json({
    result: "User created",
  });
});

//NO ME SALE EL SEGUNDO FILTRO
server.post("/users", (req, res) => {
  const nameFilter = req.body.filterByName;
  const emailFilter = req.body.filterByEmail;
  const filteredUsers = users
    .filter((user) => user.name === nameFilter && user.email === emailFilter);
  res.json({
    result: filteredUsers.length !== 0 ? filteredUsers : users,
  });
});
