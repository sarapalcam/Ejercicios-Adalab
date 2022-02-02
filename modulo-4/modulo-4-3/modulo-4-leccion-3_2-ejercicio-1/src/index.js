const express = require("express");
const cors = require("cors");

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = "./public";
app.use(express.static(staticServerPath));

app.get("/response-a", (req, res) => {
  res.json({ result: "ok" });
});

app.get("/response-b", (req, res) => {
  const htmlCode = `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <h1>Esto es una página de prueba</h1>
   </body>
   </html>`;
  res.send(htmlCode);
});

app.get("/response-c", (req, res) => {
  const randomNumber = (max) => Math.ceil(Math.random() * max);
  const setLink = () =>
    randomNumber(10) % 2 === 0
      ? "https://www.youtube.com/?hl=es&gl=ES"
      : "https://www.instagram.com/?hl=es";
  res.redirect(setLink());
});

app.get("/response-d", (req, res) => {
  console.log(req.query);
  if (req.query === "user=1" || req.query === "user=2") {
    res.status(200).json({ result: "ok" });
  } else {
    res.status(404).json({ resutl: "error: invalid query param" });
  }
});
