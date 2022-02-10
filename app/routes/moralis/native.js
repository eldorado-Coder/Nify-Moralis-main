const express = require('express');
const router = express.Router();
const nativeController = require('../../controllers/moralis/native.controller')
const nativeValidators = require('../../validators/native.validator')

router.get('/get-block', nativeValidators.getBlockValidation, nativeController.getBlock)

router.get('/get-date-to-block', nativeValidators.getDateToBlockValidation, nativeController.getDateToBlock)

router.get('/get-logs-by-address', nativeValidators.getLogsByAddressValidation, nativeController.getLogsByAddress)

router.get('/get-nft-transfers-by-block', nativeValidators.getNFTTransfersByBlockValidation, nativeController.getNFTTransfersByBlock)

router.get('/get-transaction', nativeValidators.getTransactionValidation, nativeController.getTransaction)

router.get('/get-contract-events', nativeValidators.getContractEventsValidation, nativeController.getContractEvents)

router.get('/run-contract', nativeValidators.runContractValidation, nativeController.runContract)

module.exports = router;