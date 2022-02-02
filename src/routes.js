const express = require("express");
const { append } = require("express/lib/response");
const route = express.Router();

// rotas do app
route.get("/", (req, res) => res.render("index"));

module.exports = route;
