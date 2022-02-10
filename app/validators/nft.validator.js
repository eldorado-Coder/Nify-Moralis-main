const { body } = require('express-validator');
const { errorMessages } = require('./helper/config');

const storeNftValidation = [
    body('description')
    .notEmpty()
    .withMessage(errorMessages.getMessage('description', 'required'))
    .if(body('description').exists())
    .isString()
    .withMessage(errorMessages.getMessage('description', 'isString')),
    body('name')
    .notEmpty()
    .withMessage(errorMessages.getMessage('name', 'required'))
    .if(body('name').exists())
    .isString()
    .withMessage(errorMessages.getMessage('name', 'isString')),
];

module.exports = {
    storeNftValidation,
}