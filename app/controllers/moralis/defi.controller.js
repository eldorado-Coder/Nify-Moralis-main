const { general } = require('./../../utils/moralis/helper');
const {
    getPairAddressHelper,
    getPairReservesHelper
} = require('../../services/moralis/defi');

async function getPairAddress(req, res) {
    general(getPairAddressHelper, req, res);
};

async function getPairReserves(req, res) {
    general(getPairReservesHelper, req, res);
};

module.exports = {
    getPairAddress,
    getPairReserves
}