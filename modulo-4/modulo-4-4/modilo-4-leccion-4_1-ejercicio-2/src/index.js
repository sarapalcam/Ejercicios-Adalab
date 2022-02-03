const express = require('express');
const cors = require('cors');
const data = require('./data/rick-and-morty.json');

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 4000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//Endpoints
app.get('/users/:userId', (req, res) => {
  const findCharacter = data.results.find(
    (char) => char.id === parseInt(req.params.userId)
  );
  res.json(findCharacter);
});

app.get('/users/:userId/episodes', (req, res) => {
  const findCharacter = data.results.find(
    (char) => char.id === parseInt(req.params.userId)
  );
  console.log(findCharacter);
  res.json(findCharacter.episode);
})