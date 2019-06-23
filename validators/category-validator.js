const { body } = require('express-validator/check');
const categoryValidationMessages = require('../models/validation-messages').CATEGORY
var POST = ()=>{
    return [
        body('name').exists().withMessage(categoryValidationMessages.NAME_REQUIRED).isEmpty().withMessage(categoryValidationMessages.NAME_NOT_EMPTY).isAlphanumeric().withMessage(categoryValidationMessages.NAME_SHOULD_BE_ALPHABETS)
    ];
}
module.exports = {
    POST
}