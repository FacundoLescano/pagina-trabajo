const express = require("express");
const routes = express();

routes.get("/", (req, res) => {
  res.send("hola mundo")
})

module.exports = routes;
