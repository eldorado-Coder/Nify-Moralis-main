const express = require('express');
const router = express.Router();
const nftController = require('../../controllers/moralis/nft.controller');
const nftValidators = require('../../validators/nft.validator');
const auth = require('./../../middleware/auth');
const upload = require('./../../middleware/upload');


router.get('/', [auth], nftController.getNfts)

router.get('/:nftId', [auth], nftController.getNft)

router.post('/', [auth, upload, nftValidators.storeNftValidation], nftController.storeNft)

router.post('/like/:nftId', auth, nftController.likeNft)

module.exports = router;