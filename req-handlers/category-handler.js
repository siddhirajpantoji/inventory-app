const categoryService = require('../service/category-service')
const logger = require('winston-wrapper').getLogger('category-req-handler')
var getAllCategories = async (req, res, next) => {
    logger.debug("Inside getAllCategories")
    try {
        var data = await categoryService.getAllCategories()
        res.status(200).json({data})
    }
    catch (err) {
        logger.error("Error Found  while get All Categories ", err);
        next(err);
    }
}

var createCategoryTable =  async (req, res, next) => {
    try {
        logger.info("Inside Create Category Table ")
        let data = await categoryService.createCategoryTable()
        console.log("table Created")
        res.status(200).json({data});
    }
    catch (err) {
        next(err);
    }
}
module.exports = {
    getAllCategories , createCategoryTable
}