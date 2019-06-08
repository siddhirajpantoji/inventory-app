var sequelize = require('./sequlize').sequelize;
const logger = require('winston-wrapper').getLogger('health-check-dal')
async function healthCheck(){
    return new Promise((resolve,reject)=>{
        logger.info("Inside DAO ")
        sequelize.authenticate().then(()=>{
            //console.log("Inside Auth True ")
            resolve(true)
            sequelize.close();
        }).catch(err=>{
            logger.error("Auth failure ",err);
            sequelize.close();
            reject(err);
        })
    })
    
}
module.exports = healthCheck;