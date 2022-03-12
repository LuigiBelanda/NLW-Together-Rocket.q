const express = require("express");
const route = require("./routes");
const path = require("path");

const server = express();

// configs do EJS e pasta views
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

// Config da pasta public (css, images e scripts)
server.use(express.static("public"));

// middleware
server.use(express.urlencoded({ extended: true }));

server.use(route);

// iniciando o server
server.listen(3000, () => console.log("Rodando server"));
