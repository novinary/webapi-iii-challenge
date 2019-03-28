const express = require("express");
const server = express();
const helmet = require("helmet");

const usersRouter = require("./usersRouter.js");
const postsRouter = require("./postsRouter.js");

server.use(express.json());
server.use(helmet());

// routing
server.use("/api/users", usersRouter);
server.use("/api/posts", postsRouter);

server.get('/', (req, res) => {

    res.status(200).json({ 'test': 'just a test' });

});

module.exports = server;
