const categoryDao = require('../dal/category-dao')
const messages = require('../models/messages')
const logger = require('winston-wrapper').getLogger("category-service")
var getAllCategories = async (pageInfo)=>{
    try {
        let data = await categoryDao.getAllCategories();
        return {
            message:messages.EVERYTHING_LOOKS_GOOD,
            data:data
        }
    }catch(err){
        logger.error("Error Found while Getting Category ")
        throw err;
    }
}

var createCategoryTable = async ()=>{
    try {
        return await categoryDao.createCategoryTable()
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllCategories , createCategoryTable
}