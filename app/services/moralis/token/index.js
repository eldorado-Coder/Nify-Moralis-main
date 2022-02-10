const { getMoralisInstance } = require('./../../../utils/moralis/helper');

async function getTokenMetadataHelper(data) {
    //Get netadata for one token
    //const options = { chain: "bsc", addresses: "0xe...556" };
    //const tokenMetadata = await Moralis.Web3API.token.getTokenMetadata(options);
    
    //Get metadata for an array of tokens
    //const options = { chain: "bsc", addresses: ["0xe...556", "0xe...742"] };
    return await getMoralisInstance().Web3API.token.getTokenMetadataHelper(data);
}

async function getTokenMetadataBySymbolHelper(data) {
    //Get metadata for one token
    //const options = { chain: "bsc", symbols: "LINK" };
    //const tokenMetadata = await Moralis.Web3API.token.getTokenMetadataBySymbol(options);
    
    //Get metadata for an array of tokens
    //const options = { chain: "bsc", symbols: ["LINK", "AAVE"] };
    return await getMoralisInstance().Web3API.token.getTokenMetadataBySymbolHelper(data);
}

async function getNFTTradesHelper(data) {
    //const options = { address: "0xd...07", limit: "10", chain: "bsc" };
    return await getMoralisInstance().Web3API.token.getNFTTradesHelper(data);
}

async function getNFTOwnersHelper(data) {
    //const options = { address: "0xd...07", limit: "10", chain: "bsc" };
    return await getMoralisInstance().Web3API.token.getNFTTradesHelper(data);
}

async function getNFTLowestPriceHelper(data) {
    //const options = { address: "0xd...07", days: "3" };
    return await getMoralisInstance().Web3API.token.getNFTLowestPriceHelper(data);
}

async function getTokenPriceHelper(data) {
    //Get token price on PancakeSwap v2 BSC
    //const options = {
        //address: "0x7...2",
        //chain: "bsc",
        //exchange: "PancakeSwapv2"
    //};
    return await getMoralisInstance().Web3API.token.getTokenPriceHelper(data);
}

async function getContractNFTTransferHelper(data){
    //const options = { address: "0xd...07", chain: "bsc" };
    return await getMoralisInstance().Web3API.token.getContractNFTTransferHelper(data);
}

async function getTokenAllowanceHelper(data){
    //Get token allowace on ETH
    //const options = {
        //owner_address: "0xe...556",
        //spender_address: "0xe...556",
        //address: "0xe...556"
      //};
      return await getMoralisInstance().Web3API.token.getTokenAllowanceHelper(data);
}

async function searchNFTsHelper(data) {
    //const options = { q: "Pancake", chain: "bsc", filter: "name" };
    return await getMoralisInstance().Web3API.token.searchNFTsHelper(data);
}

async function getWalletTokenIdTransfersHelper(data){
    //const options = { address: "0xd...07", token_id: "1", chain: "bsc" };
    return await getMoralisInstance().Web3API.token.getWalletTokenIdTransfersHelper(data);
}

async function getTokenIdOwnersHelper(data){
    //const options = { address: "0xd...07", token_id: "1", chain: "bsc" };
    return await getMoralisInstance().Web3API.token.getTokenIdOwnersHelper(data);
}

async function getTokenIdMetadataHelper(data){
    //const options = { address: "0xd...07", token_id: "1", chain: "bsc" };
    return await getMoralisInstance().Web3API.token.getTokenIdMetadataHelper(data);
}

async function getNFTMetadataHelper(data){
    //const options = { address: "0xd...07", chain: "bsc" };
    return await getMoralisInstance().Web3API.token.getNFTMetadataHelper(data);
}

async function getAllTokenIdsHelper(){
    //const options = { address: "0xd...07", chain: "bsc" };
    return await getMoralisInstance().Web3API.token.getAllTokenIdsHelper(data);
}
module.exports = {
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
}