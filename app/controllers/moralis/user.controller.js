const {
    userRegistrationHelper,
    userLoginHelper,
    refreshTokenHelper,
    userProfileHelper
} = require('./../../services/moralis/user');

async function userRegistration(req, res) {
    userRegistrationHelper(req, res);
};

async function userLogin(req, res) {
    userLoginHelper(req, res);
};

async function refreshToken(req, res) {
    refreshTokenHelper(req, res);
};

async function userProfile(req, res) {
    userProfileHelper(req, res);
};

module.exports = {
    userRegistration,
    userLogin,
    refreshToken,
    userProfile
}