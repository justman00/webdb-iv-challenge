const express = require("express");
const dishesRouter = require("../routes/dishes");

const server = express();

server.use(express.json());
server.use("/api/dishes", dishesRouter);

server.get("/", (req, res) => {
  res.send("hi");
});

module.exports = server;
