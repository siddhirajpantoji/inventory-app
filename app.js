var app = require('express')();
const winston = require('winston-wrapper');
const logger = require('app');
app.use(require('body-parser').json());
app.use(winston.expressMiddleware);


module.exports = app;