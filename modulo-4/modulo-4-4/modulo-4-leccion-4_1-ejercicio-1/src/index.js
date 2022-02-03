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

//Endpoints
app.get("/users/:userId/orders/:orderId", (req, res) => {
    console.log(req.params);
    res.json({"success": true, "result": "ok"})
})