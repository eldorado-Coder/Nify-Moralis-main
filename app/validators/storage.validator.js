const { body } = require('express-validator');
const { errorMessages } = require('./helper/config');

const storeInIpfsValidation = [
    body('path').notEmpty().isString().withMessage(errorMessages.getMessage('path','isString')),
    body('content').notEmpty().isString().withMessage(errorMessages.getMessage('content','isString')),
];

module.exports = {
    storeInIpfsValidation
}