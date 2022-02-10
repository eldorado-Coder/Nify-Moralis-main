const { body } = require('express-validator');
const { errorMessages } = require('./helper/config');

const resolveDomainValidation = [
    body('currency').optional().isString().withMessage(errorMessages.getMessage('currency','isString')),
    body('domain')
    .notEmpty()
    .withMessage(errorMessages.getMessage('domain','required'))
    .if(body('domain').exists())
    .isString()
    .withMessage(errorMessages.getMessage('domain','isString')),
];

module.exports = {
    resolveDomainValidation
}