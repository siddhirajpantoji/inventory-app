const categoryDao = require('../dal/category-dao')
const logger = require('winston-wrapper').getLogger("category-service")
var getAllCategories = async (pageInfo)=>{
    try {
        return await categoryDao.getAllCategories()
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