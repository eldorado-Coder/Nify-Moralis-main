const express = require('express');
const router = express.Router();
const defiController = require('../../controllers/moralis/defi.controller')
const defiValidators = require('../../validators/defi.validator')

router.get('/get-pair-address', defiValidators.getPairAddressValidation, defiController.getPairAddress)

router.get('/get-pair-reserves', defiValidators.getPairReservesValidation, defiController.getPairReserves)

module.exports = router;