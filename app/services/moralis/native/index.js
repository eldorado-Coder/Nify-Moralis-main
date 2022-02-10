const { getMoralisInstance } = require('./../../../utils/moralis/helper');

async function getBlockHelper(data) {
    // get block content on BSC
    return await getMoralisInstance().Web3API.native.getBlock(data);
}

async function getDateToBlockHelper(data) {
    // get block content on BSC
    return await getMoralisInstance().Web3API.native.getDateToBlock(data);
}

async function getLogsByAddressHelper(data) {
    // const options = {
        // address: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
        // chain: "bsc",
        // topic0: "0x2caecd17d02f56fa897705dcc740da2d237c373f70686f4e0d9bd3bf0400ea7a",
        // topic1: "0x000000000000000000000000031002d15b0d0cd7c9129d6f644446368deae391",
        // topic2: "0x000000000000000000000000d25943be09f968ba740e0782a34e710100defae9"
    // };
    return await getMoralisInstance().Web3API.native.getLogsByAddress(data);
}

async function getNFTTransfersByBlockHelper(data) {
    // get NFT transfers by block number or block hash
    return await getMoralisInstance().Web3API.native.getNFTTransfersByBlock(data);
}

async function getTransactionHelper(data) {
    // const options = {
    //     chain: "eth",
    //     transaction_hash: "0x2cc0f9c2b6d45a2be6d7b30256a9953f0d5bb2d86fa79a57ae818aee2934b2ea"
    // };
    return await getMoralisInstance().Web3API.native.getTransaction(data);
}

async function getContractEventsHelper(data) {
    // const ABI = {
    //     "anonymous": false,
    //     "inputs": [{
    //             "indexed": false,
    //             "internalType": "uint112",
    //             "name": "reserve0",
    //             "type": "uint112"
    //         },
    //         {
    //             "indexed": false,
    //             "internalType": "uint112",
    //             "name": "reserve1",
    //             "type": "uint112"
    //         }
    //     ],
    //     "name": "Sync",
    //     "type": "event"
    // };

    // const options = {
    //     chain: "bsc",
    //     address: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
    //     topic: "0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1",
    //     abi: ABI
    // };
    return await getMoralisInstance().Web3API.native.getContractEvents(data);
}

async function runContractHelper(data) {
    // const ABI = [{
    //     "constant": true,
    //     "inputs": [{
    //             "internalType": "address",
    //             "name": "owner",
    //             "type": "address"
    //         },
    //         {
    //             "internalType": "address",
    //             "name": "spender",
    //             "type": "address"
    //         }
    //     ],
    //     "name": "allowance",
    //     "outputs": [{
    //         "internalType": "uint256",
    //         "name": "",
    //         "type": "uint256"
    //     }],
    //     "payable": false,
    //     "stateMutability": "view",
    //     "type": "function"
    // }];

    // const options = {
    //     chain: "bsc",
    //     address: "0x...16",
    //     function_name: "allowance",
    //     abi: ABI,
    //     params: { owner: "0x1...2", spender: "0x1...2" }
    // };
    return await getMoralisInstance().Web3API.native.runContractFunction(data);
}

module.exports = {
    getBlockHelper,
    getDateToBlockHelper,
    getLogsByAddressHelper,
    getNFTTransfersByBlockHelper,
    getTransactionHelper,
    getContractEventsHelper,
    runContractHelper
}