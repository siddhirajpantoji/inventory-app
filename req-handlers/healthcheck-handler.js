var healthCheckService = require('../service/health-check')
const logger = require('winston-wrapper').getLogger('health-check-controller')
var healthCheck = async (req,res,next) => {
    try {
        let healthCheck = await healthCheckService();
        logger.info("Inside Health Check Controller ")
        if(healthCheck){
            res.status(200).json({message:"Everything Looks good "})
        }
        else{
            next({status:500,message:"Database connection not successful "})
        }
    }
    catch(err){
        console.log("Error caugth controller ")
        next(err);
    }
}
module.exports = healthCheck;