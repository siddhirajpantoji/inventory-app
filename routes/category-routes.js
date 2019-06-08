const categoryHandler = require('../req-handlers/category-handler')
var router = require('express').Router()

router.route("/").get(categoryHandler.getAllCategories);
router.route("/create").get(categoryHandler.createCategoryTable);
module.exports  = router