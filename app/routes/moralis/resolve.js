const express = require('express');
const router = express.Router();
const resolveController = require('../../controllers/moralis/resolve.controller')
const resolveValidators = require('../../validators/resolve.validator')

router.get('/resolve-domain', resolveValidators.resolveDomainValidation, resolveController.resolveDomain)

module.exports = router;