const { getMoralisInstance } = require('./../../../utils/moralis/helper');

async function getNativeTransactionHelper(data) {

    // get BSC transactions for a given address
    // with most recent transactions appearing first

    //cant be empty
    // const options = { chain: "bsc", address: "0x...", order: "desc", from_block: "0" };
    return await getMoralisInstance().Web3API.account.getTransactions(data);
}


async function getNativeBalanceHelper(data) {

    // get BSC native balance for a given address
    // const options = { chain: "bsc", address: "0x...", to_block: "1234" };
    return await getMoralisInstance().Web3API.account.getNativeBalance(data);
}

async function getTokenBalancesHelper(data) {

    // const options = { chain: 'bsc', address: "0x...", to_block: "10253391" }
    return await getMoralisInstance().Web3API.account.getTokenBalances(data);
}

async function getTokenTransfersHelper(data) {

    // get BSC transfers for a given address
    // with most recent transfers appearing first
    // const options = { chain: "bsc", address: "0x...", from_block: "0" };
    return await getMoralisInstance().Web3API.account.getTokenTransfers(data);
}

async function getNFTsHelper(data) {

    // get polygon NFTs for address
    // const options = { chain: 'matic', address: '0x...' };
    return await getMoralisInstance().Web3API.account.getNFTs(data);
}

async function getNFTTransfersHelper(data) {

    // get BSC NFT transfers for a given address
    // with most recent transactions appearing first
    // const options = { chain: "bsc", address: "0x...", limit: "10" };
    return await getMoralisInstance().Web3API.account.getNFTTransfers(data);
}

async function getNFTsForContractHelper(data) {

    // const options = { chain: 'matic', address: '0x...', token_address: '0x...' };
    return await getMoralisInstance().Web3API.account.getNFTsForContract(data);
}

module.exports = {
    getNativeTransactionHelper,
    getNativeBalanceHelper,
    getTokenBalancesHelper,
    getTokenTransfersHelper,
    getNFTsHelper,
    getNFTTransfersHelper,
    getNFTsForContractHelper
}