const { general } = require('./../../utils/moralis/helper');
const {
    getTokenMetadataHelper,
    getTokenMetadataBySymbolHelper,
    getNFTTradesHelper,
    getNFTLowestPriceHelper,
    getTokenPriceHelper,
    getContractNFTTransferHelper,
    getTokenAllowanceHelper,
    searchNFTsHelper,
    getWalletTokenIdTransfersHelper,
    getTokenIdOwnersHelper,
    getTokenIdMetadataHelper,
    getNFTMetadataHelper,
    getAllTokenIdsHelper,
    getNFTOwnersHelper
} = require('../../services/moralis/token');

async function getTokenMetadata(req, res){
    general(getTokenMetadataHelper, req, res);
};

async function getTokenMetadataBySymbol(req, res){
    general(getTokenMetadataBySymbolHelper, req, res);
};

async function getNFTTrades(req, res){
    general(getNFTTradesHelper, req, res);
};

async function getNFTLowestPrice(req, res){
    general(getNFTLowestPriceHelper, req, res);
};

async function getTokenPrice(req, res){
    general(getTokenPriceHelper, req, res);
};

async function getContractNFTTransfer(req, res){
    general(getContractNFTTransferHelper, req, res);
};

async function getTokenAllowance(req, res){
    general(getTokenAllowanceHelper, req, res);
};

async function searchNFTs(req, res){
    general(searchNFTsHelper, req, res);
};

async function getWalletTokenIdTransfers(req, res){
    general(getWalletTokenIdTransfersHelper, req, res);
};

async function getTokenIdOwners(req, res){
    general(getTokenIdOwnersHelper, req, res);
};

async function getTokenIdMetadata(req, res){
    general(getTokenIdMetadataHelper, req, res);
};

async function getNFTMetadata(req, res){
    general(getNFTMetadataHelper, req, res);
};

async function getAllTokenIds(req, res){
    general(getAllTokenIdsHelper, req, res);
};

async function getNFTOwners(req, res){
    general(getNFTOwnersHelper, req, res)
}

module.exports = {
    getTokenMetadata,
    getTokenMetadataBySymbol,
    getNFTTrades,
    getNFTLowestPrice,
    getTokenPrice,
    getContractNFTTransfer,
    getTokenAllowance,
    searchNFTs,
    getWalletTokenIdTransfers,
    getTokenIdOwners,
    getTokenIdMetadata,
    getNFTMetadata,
    getAllTokenIds,
    getNFTOwners
}