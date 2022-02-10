const { getMoralisInstance } = require('./../../utils/moralis/helper');
const { folderName } = require('./../../services/moralis/config');

async function storeInIPFSHelper(name, imageContent) {
    const options = {
        abi: [{
            path: folderName + name,
            content: imageContent
        }]
    };
    const result = await getMoralisInstance().Web3API.storage.uploadFolder(options);
    return result.length ? (result[0].path ? result[0].path : false) : 'No Data';
}

async function storeInIpfs(req, res) {

    const { path, content } = req.body;

    if (!path || !content) {
        res.send(422, {
            message: "Invalid Data"
        })
        return;
    }

    storeInIPFSHelper(path, content).then(result => {
        res.send({
            result
        });
    }).catch(err => {
        res.send(400, {
            message: err.message
        });
    });



};

module.exports = {
    storeIn
}