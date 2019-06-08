var sequelize = require('./sequlize');
const logger = require('winston-wrapper').getLogger('health-check-dal')
async function healthCheck(){
    return new Promise((resolve,reject)=>{
        logger.info("Inside DAO ")
        sequelize.authenticate().then(()=>{
            //console.log("Inside Auth True ")
            resolve(true)
        }).catch(err=>{
            logger.error("Auth failure ",err);
            reject(err);
        })
    })
    
}
module.exports = healthCheck;