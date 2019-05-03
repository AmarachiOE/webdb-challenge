// Packages
const express = require("express");
const helmet = require("helmet");

// Routers
const projectsRouter = require("../routers/projects-router");
const actionsRouter = require("../routers/actions-router");

// Server
const server = express();
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome to Web DB Sprint Challenge!");
});

server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

module.exports = server;
