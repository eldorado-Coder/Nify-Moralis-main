const { general } = require('./../../utils/moralis/helper');
const {
    getBlockHelper,
    getDateToBlockHelper,
    getLogsByAddressHelper,
    getNFTTransfersByBlockHelper,
    getTransactionHelper,
    getContractEventsHelper,
    runContractHelper,
} = require('../../services/moralis/native');


async function getBlock(req, res) {
    general(getBlockHelper, req, res);
};

async function getDateToBlock(req, res) {
    general(getDateToBlockHelper, req, res);
};

async function getLogsByAddress(req, res) {
    general(getLogsByAddressHelper, req, res);
};

async function getNFTTransfersByBlock(req, res) {
    general(getNFTTransfersByBlockHelper, req, res);
};

async function getTransaction(req, res) {
    general(getTransactionHelper, req, res);
};

async function getContractEvents(req, res) {
    general(getContractEventsHelper, req, res);
};

async function runContract(req, res) {
    general(runContractHelper, req, res);
};

module.exports = {
    getBlock,
    getDateToBlock,
    getLogsByAddress,
    getNFTTransfersByBlock,
    getTransaction,
    getContractEvents,
    runContract
}