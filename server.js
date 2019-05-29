// Loads all into Environment Variables 
require('dotenv').config();
var app = require('./app');
const logger = require('winston-wrapper').getLogger('server')
const port = process.env.PORT;
if( !port){
    logger.error("PORT to host not found . Configure PORT in Environment Variables ")
    process.exit(1)
}
app.listen(port,(err)=>{
    if(err){
        logger.error("Unable to start application on PORT "+port)
    }
    else{
        logger.info("Application Started Successfully ");
    }
})