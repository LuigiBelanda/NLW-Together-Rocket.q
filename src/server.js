const express = require("express");
const server = express();
const route = require("./routes");
const path = require("path");

// configs do EJS e pasta views
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use(route);

// iniciando o server
server.listen(3000, () => console.log("Rodando server"));
