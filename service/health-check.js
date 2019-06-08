const healthCheck = require('../dal/health-check');
const logger  = require('winston-wrapper').getLogger('health-check-service')
var healthCheckService = async ()=>{
    try {
        logger.info("Inside Health Check Service ")
        let result = await healthCheck();
        console.log(result);
        return result;
    }
    catch(err){
        console.log("Error Cauth in servcie ")
        throw err;
    }
}
module.exports = healthCheckService