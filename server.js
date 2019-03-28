const express = require("express");

const server = express();
const usersRouter = require("./usersRouter.js");
const postsRouter = require("./postsRouter.js");

server.use(express.json());

// routing
server.use("/api/users", usersRouter);
server.use("/api/posts", postsRouter);

server.get('/', (req, res) => {
  
            res.status(200).json({'test':'just a test'});

});

module.exports = server;
