const express = require('express');
const router = express.Router();
const tokenValidator = require('../../validators/token.validator')
const tokenController = require('../../controllers/moralis/token.controller');

router.get('/erc20/metadata', tokenValidator.getTokenMetadataValidator, tokenController.getTokenMetadata);
//This links will be updated
router.get('/nft/address/trades', tokenValidator.getNFTTradesValidator, tokenController.getNFTTrades);

router.get('/nft/address/lowestprice', tokenValidator.getNFTLowestPriceValidator, tokenController.getNFTLowestPrice);

router.get('/erc20/metadata/symbols', tokenValidator.getTokenMetadataBySymbolValidator, tokenController.getTokenMetadataBySymbol);

router.get('/erc20/address/price', tokenValidator.getTokenPriceValidator, tokenController.getTokenPrice);

router.get('/erc20/address/transfers', tokenValidator.getContractNFTTransferValidator, tokenController.getContractNFTTransfer);

router.get('/erc20/address/allowance', tokenValidator.getTokenAllowanceValidator, tokenController.getTokenAllowance);

router.get('/nft/search', tokenValidator.searchNFTValidator, tokenController.searchNFTs);

router.get('/nft/address', tokenValidator.getTokenIdMetadataValidator, tokenController.getTokenIdMetadata);

router.get('/nft/address/owners', tokenValidator.getNFTOwnersValidator, tokenController.getNFTOwners);

router.get('/nft/address/metadata', tokenValidator.getNFTMetadataValidator, tokenController.getNFTMetadata);

router.get('/nft/transfers', tokenValidator.getWalletTokenIdTransferValidator, tokenController.getWalletTokenIdTransfers);

router.get('/nft/:address/:tokenid', tokenValidator.getAllTokenIdsValidator, tokenController.getAllTokenIds)

router.get('/nft/address/:tokenid/owners', tokenValidator.getTokenIdOwnerValidator, tokenController.getTokenIdOwners)

router.get('/nft/address/:tokenid/transfers', tokenValidator.getContractNFTTransferValidator, tokenController.getContractNFTTransfer);

module.exports = router;