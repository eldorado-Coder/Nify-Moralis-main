const { validationResult, matchedData } = require('express-validator');
const   Moralis = require('moralis/node');
const { serverUrl, appId } = require('./../../services/moralis/config');

let moralisIsStarted = false;

function getMoralisInstance() {
    if (!moralisIsStarted) {
        Moralis.start({ serverUrl, appId });
        moralisIsStarted = true;
    }
    return Moralis
}

function general(helperFunction, req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Request is invalid",
            validation: errors.array()
          });
    }

    helperFunction(matchedData(req)).then(result => {
        res.status(200).json({result});
    }).catch(err => {
        res.status(400).json({message: err.message});
    });
}

module.exports = {
    general,
    getMoralisInstance
}