const { body } = require('express-validator');
const { errorMessages, chains } = require('./helper/config');

const getBlockValidation = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('subdomain').optional().isString().withMessage(errorMessages.getMessage('subdomain','isString')),
    body('block_number_or_hash')
        .notEmpty()
        .withMessage(errorMessages.getMessage('block_number_or_hash','required'))
        .if(body('block_number_or_hash').exists())
        .isString()
        .withMessage(errorMessages.getMessage('block_number_or_hash','isString'))
];

const getDateToBlockValidation = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('providerUrl').optional().isString().withMessage(errorMessages.getMessage('providerUrl','isString')),
    body('date')
        .notEmpty()
        .withMessage(errorMessages.getMessage('date','required'))
        .if(body('date').exists())
        .isString()
        .withMessage(errorMessages.getMessage('date','isString'))
];

const getLogsByAddressValidation = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('subdomain').optional().isString().withMessage(errorMessages.getMessage('subdomain','isString')),
    body('block_number').optional().isString().withMessage(errorMessages.getMessage('block_number','isString')),
    body('from_block').optional().isString().withMessage(errorMessages.getMessage('from_block','isString')),
    body('to_block').optional().isString().withMessage(errorMessages.getMessage('to_block','isString')),
    body('from_date').optional().isString().withMessage(errorMessages.getMessage('from_date','isString')),
    body('to_date').optional().isString().withMessage(errorMessages.getMessage('to_date','isString')),
    body('topic0').optional().isString().withMessage(errorMessages.getMessage('topic0','isString')),
    body('topic1').optional().isString().withMessage(errorMessages.getMessage('topic1','isString')),
    body('topic2').optional().isString().withMessage(errorMessages.getMessage('topic2','isString')),
    body('topic3').optional().isString().withMessage(errorMessages.getMessage('topic3','isString')),
    body('address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('address','required'))
    .if(body('address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('address','isString'))
];

const getNFTTransfersByBlockValidation = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('subdomain').optional().isString().withMessage(errorMessages.getMessage('subdomain','isString')),
    body('block_number_or_hash')
        .notEmpty()
        .withMessage(errorMessages.getMessage('block_number_or_hash','required'))
        .if(body('block_number_or_hash').exists())
        .isString()
        .withMessage(errorMessages.getMessage('block_number_or_hash','isString'))
];

const getTransactionValidation = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('subdomain').optional().isString().withMessage(errorMessages.getMessage('subdomain','isString')),
    body('transaction_hash')
        .notEmpty()
        .withMessage(errorMessages.getMessage('transaction_hash','required'))
        .if(body('transaction_hash').exists())
        .isString()
        .withMessage(errorMessages.getMessage('transaction_hash','isString'))
];

const getContractEventsValidation = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('subdomain').optional().isString().withMessage(errorMessages.getMessage('subdomain','isString')),
    body('providerUrl').optional().isString().withMessage(errorMessages.getMessage('providerUrl','isString')),
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
    body('topic')
    .notEmpty()
    .withMessage(errorMessages.getMessage('topic','required'))
    .if(body('topic').exists())
    .isString()
    .withMessage(errorMessages.getMessage('topic','isString'))
];

const runContractValidation = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('subdomain').optional().isString().withMessage(errorMessages.getMessage('subdomain','isString')),
    body('providerUrl').optional().isString().withMessage(errorMessages.getMessage('providerUrl','isString')),
    body('address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('address','required'))
    .if(body('address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('address','isString')),
    body('function_name')
    .notEmpty()
    .withMessage(errorMessages.getMessage('function_name','required'))
    .if(body('function_name').exists())
    .isString()
    .withMessage(errorMessages.getMessage('function_name','isString'))
]


module.exports = {
    getBlockValidation,
    getDateToBlockValidation,
    getLogsByAddressValidation,
    getNFTTransfersByBlockValidation,
    getTransactionValidation,
    getContractEventsValidation,
    runContractValidation
}