const { body } = require('express-validator');
const { errorMessages, chains } = require('./helper/config');

const getPairAddressValidation = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('to_block').optional().isString().withMessage(errorMessages.getMessage('to_block','isString')),
    body('to_date').optional().isString().withMessage(errorMessages.getMessage('to_date','isString')),
    body('exchange')
    .notEmpty()
    .withMessage(errorMessages.getMessage('exchange','required'))
    .if(body('exchange').exists())
    .isString()
    .withMessage(errorMessages.getMessage('exchange','isString')),
    body('token0_address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('token0_address','required'))
    .if(body('token0_address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('token0_address','isString')),
    body('token1_address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('token1_address','required'))
    .if(body('token1_address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('token1_address','isString')),
];

const getPairReservesValidation = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('to_block').optional().isString().withMessage(errorMessages.getMessage('to_block','isString')),
    body('to_date').optional().isString().withMessage(errorMessages.getMessage('to_date','isString')),
    body('provider_url').optional().isString().withMessage(errorMessages.getMessage('provider_url','isString')),
    body('pair_address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('pair_address','required'))
    .if(body('pair_address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('pair_address','isString')),
];

module.exports = {
    getPairAddressValidation,
    getPairReservesValidation
}