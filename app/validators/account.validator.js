const { body } = require('express-validator');
const { errorMessages, chains } = require('./helper/config');



const getTransactionValidation = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('subdomain').optional().isString().withMessage(errorMessages.getMessage('subdomain','isString')),
    body('from_block').optional().isString().withMessage(errorMessages.getMessage('from_block','isString')),
    body('to_block').optional().isString().withMessage(errorMessages.getMessage('to_block','isString')),
    body('from_date').optional().isString().withMessage(errorMessages.getMessage('from_date','isString')),
    body('to_date').optional().isString().withMessage(errorMessages.getMessage('to_date','isString')),
    body('offset').optional().isInt().withMessage(errorMessages.getMessage('offset','isInt')),
    body('limit').optional().isInt().withMessage(errorMessages.getMessage('limit','isInt')),
    body('address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('address','required'))
    .if(body('address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('address','isString'))
];

const getNativeBalanceValidation = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('providerUrl').optional().isString().withMessage(errorMessages.getMessage('providerUrl','isString')),
    body('to_block').optional().isInt().withMessage(errorMessages.getMessage('to_block','isInt')),
    body('address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('address','required'))
    .if(body('address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('address','isString'))
];

const getTokenBalancesValidation = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('subdomain').optional().isString().withMessage(errorMessages.getMessage('subdomain','isString')),
    body('to_block').optional().isInt().withMessage(errorMessages.getMessage('to_block','isInt')),
    body('address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('address','required'))
    .if(body('address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('address','isString'))
];

const getTokenTransfersValidation = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('subdomain').optional().isString().withMessage(errorMessages.getMessage('subdomain','isString')),
    body('from_block').optional().isString().withMessage(errorMessages.getMessage('from_block','isString')),
    body('to_block').optional().isString().withMessage(errorMessages.getMessage('to_block','isString')),
    body('from_date').optional().isString().withMessage(errorMessages.getMessage('from_date','isString')),
    body('to_date').optional().isString().withMessage(errorMessages.getMessage('to_date','isString')),
    body('offset').optional().isInt().withMessage(errorMessages.getMessage('offset','isInt')),
    body('limit').optional().isInt().withMessage(errorMessages.getMessage('limit','isInt')),
    body('address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('address','required'))
    .if(body('address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('address','isString')),
];

const getNFTsValidation = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('format').optional().isString().withMessage(errorMessages.getMessage('format','isString')),
    body('offset').optional().isInt().withMessage(errorMessages.getMessage('offset','isInt')),
    body('limit').optional().isInt().withMessage(errorMessages.getMessage('limit','isInt')),
    body('address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('address','required'))
    .if(body('address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('address','isString')),
];

const getNFTTransfers = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('format').optional().isString().withMessage(errorMessages.getMessage('format','isString')),
    body('direction').optional().isString().withMessage(errorMessages.getMessage('direction','isString')),
    body('offset').optional().isInt().withMessage(errorMessages.getMessage('offset','isInt')),
    body('limit').optional().isInt().withMessage(errorMessages.getMessage('limit','isInt')),
    body('address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('address','required'))
    .if(body('address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('address','isString')),
];

const getNFTsForContract = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('format').optional().isString().withMessage(errorMessages.getMessage('format','isString')),
    body('offset').optional().isInt().withMessage(errorMessages.getMessage('offset','isInt')),
    body('limit').optional().isInt().withMessage(errorMessages.getMessage('limit','isInt')),
    body('address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('address','required'))
    .if(body('address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('address','isString')),
    body('token_address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('token_address','required'))
    .if(body('token_address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('token_address','isString')),
];

module.exports = {
    getTransactionValidation,
    getNativeBalanceValidation,
    getTokenBalancesValidation,
    getTokenTransfersValidation,
    getNFTsValidation,
    getNFTTransfers,
    getNFTsForContract
}