var app = require('express')();
const winston = require('winston-wrapper');
const logger = winston.getLogger("app.js")
const notFoundHandler  = require('./req-handlers/not-found-handler');
const globalErrorHandler = require('./req-handlers/global-error-handler');
app.use(require('body-parser').json());
app.use(winston.expressMiddleware);
app.use("*",notFoundHandler)
app.use(globalErrorHandler)
module.exports = app;