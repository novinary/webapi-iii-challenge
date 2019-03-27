const express = require("express");

const server = express();
const usersRouter = require("./usersRouter.js");
const postsRouter = require("./postsRouter.js");

server.use(express.json());

// routing
server.use("/api/users", usersRouter);
server.use("/api/posts", postsRouter);

module.exports = server;
