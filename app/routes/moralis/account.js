const express = require('express');
const router = express.Router();
const accountsController = require('../../controllers/moralis/account.controller')
const accountValidators = require('../../validators/account.validator')

router.get('/get-transaction', accountValidators.getTransactionValidation, accountsController.getNativeTransaction)

router.get('/get-balance', accountValidators.getNativeBalanceValidation, accountsController.getNativeBalance)

router.get('/get-token-balance', accountValidators.getTokenBalancesValidation, accountsController.getTokenBalances)

router.get('/get-token-transfers', accountValidators.getTokenTransfersValidation, accountsController.getTokenTransfers)

router.get('/get-nfts', accountValidators.getNFTsValidation, accountsController.getNFTs)

router.get('/get-nft-transfers', accountValidators.getNFTTransfers, accountsController.getNFTTransfers)

router.get('/get-nft-for-contract', accountValidators.getNFTsForContract, accountsController.getNFTsForContract)

module.exports = router;