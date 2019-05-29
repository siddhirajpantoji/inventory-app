
function errorHandler(error,req,res,next){
    
    var result = {
        status : error.status || 500,
        message : error.message,
        err:error
    };
    res.status(error.status).json(result)
}
module.exports = errorHandler