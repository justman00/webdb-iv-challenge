const express = require("express");
const dishesRouter = require("../routes/dishes");
const recipesRouter = require("../routes/recipes");

const server = express();

server.use(express.json());
server.use("/api/dishes", dishesRouter);
server.use("/api/recipes", recipesRouter);

server.get("/", (req, res) => {
  res.send("hi");
});

module.exports = server;
