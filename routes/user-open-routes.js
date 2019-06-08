// Here comes healthCheck , Sign Up and Login 
const express = require('express')
const Router = express.Router();
const healthCheckHandler = require('../req-handlers/healthcheck-handler')
Router.route("/").all(healthCheckHandler);
module.exports = Router;