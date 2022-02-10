const {
    storeNftHelper,
    getNftsHelper,
    likeNftHelper,
    getNftHelper
} = require('../../services/moralis/nft');

async function storeNft(req, res) {
    storeNftHelper(req, res);
}

async function getNfts(req, res) {
    getNftsHelper(req, res);
}

async function getNft(req, res) {
    getNftHelper(req, res);
}

async function likeNft(req, res) {
    likeNftHelper(req, res);
}

module.exports = {
    storeNft,
    getNfts,
    likeNft,
    getNft
}