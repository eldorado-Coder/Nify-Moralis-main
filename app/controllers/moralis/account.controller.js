const { general } = require('./../../utils/moralis/helper');
const {
    getNativeTransactionHelper,
    getNativeBalanceHelper,
    getTokenBalancesHelper,
    getTokenTransfersHelper,
    getNFTsHelper,
    getNFTTransfersHelper,
    getNFTsForContractHelper
} = require('../../services/moralis/account')

async function getNativeTransaction(req, res) {
    general(getNativeTransactionHelper, req, res);
};

async function getNativeBalance(req, res) {
    general(getNativeBalanceHelper, req, res);
};

async function getTokenBalances(req, res) {
    general(getTokenBalancesHelper, req, res);
};

async function getTokenTransfers(req, res) {
    general(getTokenTransfersHelper, req, res);
};

async function getNFTs(req, res) {
    general(getNFTsHelper, req, res);
};

async function getNFTTransfers(req, res) {
    general(getNFTTransfersHelper, req, res);
};

async function getNFTsForContract(req, res) {
    general(getNFTsForContractHelper, req, res);
};


module.exports = {
    getNativeTransaction,
    getNativeBalance,
    getTokenBalances,
    getTokenTransfers,
    getNFTs,
    getNFTTransfers,
    getNFTsForContract
}