const express = require('express');
const router = express.Router();
const storageController = require('../../controllers/moralis/storage.controller')
const storageValidators = require('../../validators/storage.validator')

router.post('/store/ipfs', storageValidators.storeInIpfsValidation, storageController.storeInIpfs)

module.exports = router;