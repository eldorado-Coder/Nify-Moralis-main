const { body } = require('express-validator');
const { errorMessages, chains } = require('./helper/config');

const getTokenMetadataValidator = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('address','required'))
    .if(body('address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('address','isString')),
    body('addresses')
    .notEmpty()
    .withMessage(errorMessages.getMessage('addresses','required'))
];

const getTokenMetadataBySymbolValidator = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('symbols')
    .notEmpty()
    .withMessage(errorMessages.getMessage('symbols','required'))
];

const getTokenAllowanceValidator = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('address','required'))
    .if(body('address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('address','isString')),
    body('owner_address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('owner_address','required'))
    .if(body('owner_address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('owner_address','isString')),
    body('spender_address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('spender_address','required'))
    .if(body('spender_address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('spender_address','isString')),
];

const getTokenPriceValidator = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('exchange').optional().isString().withMessage(errorMessages.getMessage('exchange','isString')),
    body('to_block').optional().isString().withMessage(errorMessages.getMessage('to_block','isString')),
    body('address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('address','required'))
    .if(body('address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('address','isString')),
];

const getAllTokenIdsValidator = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('address','required'))
    .if(body('address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('address','isString')),
];

const getNFTMetadataValidator = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('address','required'))
    .if(body('address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('address','isString')),
];

const getNFTOwnersValidator = [
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

const searchNFTValidator = [
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
    body('filter')
    .notEmpty()
    .withMessage(errorMessages.getMessage('filter','required'))
    .if(body('filter').exists())
    .isString()
    .withMessage(errorMessages.getMessage('filter','isString')),
    body('q')
    .notEmpty()
    .withMessage(errorMessages.getMessage('q','required'))
    .if(body('q').exists())
    .isString()
    .withMessage(errorMessages.getMessage('q','isString')),
];

const getContractNFTTransferValidator = [
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

const getTokenIdMetadataValidator = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('format').optional().isString().withMessage(errorMessages.getMessage('format','isString')),
    body('address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('address','required'))
    .if(body('address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('address','isString')),
    body('token_id')
    .notEmpty()
    .withMessage(errorMessages.getMessage('token_id','required'))
    .if(body('token_id').exists())
    .isString()
    .withMessage(errorMessages.getMessage('token_id','isString')),
];

const getTokenIdOwnerValidator = [
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
    body('token_id')
    .notEmpty()
    .withMessage(errorMessages.getMessage('token_id','required'))
    .if(body('token_id').exists())
    .isString()
    .withMessage(errorMessages.getMessage('token_id','isString')),
];

const getWalletTokenIdTransferValidator = [
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
    body('token_id')
    .notEmpty()
    .withMessage(errorMessages.getMessage('token_id','required'))
    .if(body('token_id').exists())
    .isString()
    .withMessage(errorMessages.getMessage('token_id','isString')),
];

const getNFTTradesValidator = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
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

const getNFTLowestPriceValidator = [
    body('chain').optional().isIn(chains).withMessage(errorMessages.getMessage(chains.toString(),'isIn')),
    body('days').optional().isInt().withMessage(errorMessages.getMessage('days','isInt')),
    body('marketplace').optional().isString().withMessage(errorMessages.getMessage('marketplace','isString')),
    body('address')
    .notEmpty()
    .withMessage(errorMessages.getMessage('address','required'))
    .if(body('address').exists())
    .isString()
    .withMessage(errorMessages.getMessage('address','isString')),
];

module.exports = {
    getTokenMetadataValidator,
    getTokenMetadataBySymbolValidator,
    getTokenPriceValidator,
    getTokenAllowanceValidator,
    getNFTMetadataValidator,
    getAllTokenIdsValidator,
    searchNFTValidator,
    getNFTOwnersValidator,
    getTokenIdMetadataValidator,
    getContractNFTTransferValidator,
    getWalletTokenIdTransferValidator,
    getTokenIdOwnerValidator,
    getNFTLowestPriceValidator,
    getNFTTradesValidator
}