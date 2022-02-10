const { general } = require('./../../utils/moralis/helper');
const {
    resolveDomainHelper,
} = require('../../services/moralis/resolve');

async function resolveDomain(req, res) {
    general(resolveDomainHelper, req, res);
};

module.exports = {
    resolveDomain
}