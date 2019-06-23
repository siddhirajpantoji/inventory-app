const categoryHandler = require('../req-handlers/category-handler')
var router = require('express').Router()
const methodNotImplementedHandler = require('../req-handlers/not-implemented-handler')
router.route("/").get(categoryHandler.getAllCategories).all(methodNotImplementedHandler);

router.route("/create").get(categoryHandler.createCategoryTable).all(methodNotImplementedHandler);
module.exports  = router