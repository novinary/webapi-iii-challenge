const express = require('express');

const server = express();
const usersRouter = require('./usersRouter.js');

server.use(express.json());

// routing 
server.use('/api/users', usersRouter);

module.exports = server;
