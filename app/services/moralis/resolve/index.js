const { getMoralisInstance } = require('./../../../utils/moralis/helper');

async function resolveDomainHelper(data) {

    return await getMoralisInstance().Web3API.resolve.resolveDomain(data );
}

module.exports = {
    resolveDomainHelper
}