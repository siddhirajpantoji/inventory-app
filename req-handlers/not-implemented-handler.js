const messages  = require('../models/messages')
function notImplementedHandler(req,res,next){
    const error = new Error(messages.METHOD_NOT_IMPLEMENTED);
    error.status = 501;
    next(error);
}
module.exports = notImplementedHandler