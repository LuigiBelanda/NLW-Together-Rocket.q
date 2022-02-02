const express = require("express");
const { append } = require("express/lib/response");
const route = express.Router();

// rotas do app
route.get("/", (req, res) => res.render("index"));
route.get("/room", (req, res) => res.render("room"));
route.get("/create-pass", (req, res) => res.render("create-pass"))

module.exports = route;
