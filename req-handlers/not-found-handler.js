const logger  = require('winston-wrapper').getLogger("not-found-handler")
function notFoundHandler(req, res, next) {
    
    const error = new Error('Resource not found!');
    error.status = 404;
    next(error);
}

module.exports = notFoundHandler