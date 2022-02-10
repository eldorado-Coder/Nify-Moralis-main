const { getMoralisInstance } = require('./../../../utils/moralis/helper');

async function getPairAddressHelper(data) {
    return await getMoralisInstance().Web3API.defi.getPairAddress(data);
}

async function getPairReservesHelper(data) {
    return await getMoralisInstance().Web3API.defi.getPairReserves(data);
}

module.exports = {
    getPairAddressHelper,
    getPairReservesHelper
}