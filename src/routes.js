const express = require("express");
const route = express.Router();

// rotas do app
route.get("/", (req, res) => res.render("index"));
route.get("/room", (req, res) => res.render("room"));
route.get("/create-pass", (req, res) => res.render("create-pass"));
// :room, :question, :actions = var
route.post("/room/:room/:question/:action", (req, res) => res.render());

module.exports = route;
