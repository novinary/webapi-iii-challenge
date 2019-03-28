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
    res.send(`
    <h2>Lambda School</h>
    <p>Welcome to the Lambda Users and Posts API</p>
  `);
}); 

module.exports = server;
