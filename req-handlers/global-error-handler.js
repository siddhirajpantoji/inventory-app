const logger = require('winston-wrapper').getLogger('global-error-handler')
function errorHandler(error,req,res,next){
    logger.error(error.message,error);
    var result = {
        status : error.status || 500,
        message : error.message,
        err:error
    };
    res.status(result.status).json(result)
}
module.exports = errorHandler