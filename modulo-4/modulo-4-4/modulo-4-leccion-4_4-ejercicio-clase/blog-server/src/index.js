const express = require('express');
const cors = require('cors');
const server = express();
const posts = require("./data/posts.json");
const ejs = require("ejs");

server.use(cors());
server.use(express.json());

// static server

server.use(express.static('./static'));

server.set("view engine", "ejs"); //Motor de plantillas

const serverPort = 4000;
server.listen(serverPort, () => { console.log(`Server listening at http://localhost:${serverPort}`); });

//Endpoints 
server.get('/posts/:slug', (req, res) => {
    //console.log(req.params.slug);
    const reqParamsSlug = req.params.slug;
    const postData = posts.find(post => post.slug === reqParamsSlug);
    //console.log(postData);
    postData.catList = postData.categories.split(",");
    res.render("post", postData)
});
