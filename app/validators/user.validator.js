const { body } = require('express-validator');
const { errorMessages } = require('./helper/config');

const registrationValidation = [
    body('name').optional().isString().withMessage(errorMessages.getMessage('name', 'isString')),
    body('email')
    .notEmpty()
    .withMessage(errorMessages.getMessage('email', 'required'))
    .if(body('email').exists())
    .isEmail()
    .withMessage(errorMessages.getMessage('email', 'isEmail')),
    body('password')
    .notEmpty()
    .withMessage(errorMessages.getMessage('password', 'required'))
    .if(body('password').exists())
    .isLength({ min: 8 })
    .withMessage(errorMessages.getMessage('password', 'minLengthPassword')),
    body('confirm_password')
    .notEmpty()
    .withMessage(errorMessages.getMessage('confirm_password', 'required'))
    .if(body('confirm_password').exists())
    .isLength({ min: 8 })
    .withMessage(errorMessages.getMessage('confirm_password', 'minLengthPassword')),
];


const loginValidation = [
    body('email')
    .notEmpty()
    .withMessage(errorMessages.getMessage('email', 'required'))
    .if(body('email').exists())
    .isEmail()
    .withMessage(errorMessages.getMessage('email', 'isEmail')),
    body('password')
    .notEmpty()
    .withMessage(errorMessages.getMessage('password', 'required'))
    .if(body('password').exists()),
];

module.exports = {
    registrationValidation,
    loginValidation
}