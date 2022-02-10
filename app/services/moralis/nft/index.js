const {
    validationResult
} = require('express-validator');
const fs = require('fs')
const Nft = require('./../../../model/nft');
const Comment = require('./../../../model/comment');

const {
    appUrl
} = require('./../../../services/moralis/config');

async function storeNftHelper(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Request is invalid",
            validation: errors.array()
        });
    }
    const file = req.file;
    if (!file) {
        return res.status(400).send({
            message: 'Please provide picture'
        })
    }

    const fileName = Date.now() + '--' + file.originalname

    try {
        fs.writeFileSync(`app/public/images/${fileName}`, file.buffer)

        const nft = await Nft.create({
            userId: req.userId,
            description: req.body.description,
            name: req.body.name,
            type: 'image',
            asset: fileName
        });
        nft.asset = appUrl + '/' + nft.asset;
        return res.status(200).send({
            nft
        })

    } catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
}
async function getNftsHelper(req, res) {
    const data = await Nft.find({}, {
        __v: 0,
        createdAt: 0,
        updatedAt: 0
    }).sort({like: -1}).lean().exec()

    if (data) {
        return res.status(200).json({
            nft: data
        })
    } else {
        return res.status(404).json({
            message: 'Nft not Found'
        })
    }
}

async function getNftHelper(req, res) {

    const nftId = req.params["nftId"];
    const nft = await Nft.findById(nftId)

    Comment.find({nftId}).sort({postedDate: 1}).lean().exec()
    .then(comments => {
        let rec = (comment, threads) => {
            for (var thread in threads) {
                value = threads[thread];

                if (thread.toString() === comment.parentId.toString()) {
                    value.children[comment._id] = comment;
                    return;
                }

                if (value.children) {
                    rec(comment, value.children)
                }
            }
        }
        let threads = {}, comment
        for (let i=0; i<comments.length; i++) {
            comment = comments[i]
            comment['children'] = {}
            let parentId = comment.parentId
            if (!parentId) {
                threads[comment._id] = comment
                continue
            }
            rec(comment, threads)
        }
        res.json({
            nft: nft,
            commentsCount: comments.length,
            comments: threads
        })
    })
    .catch(err => res.status(500).json({error: err}))
}

async function likeNftHelper(req, res) {

    Nft.findOneAndUpdate({_id : req.params["nftId"]}, {$inc : {'like' : 1}}).exec()
    .then(result => res.status(200).json({
        message: "Nft is liked",
        nft: result
    }))
    .catch(err => res.status(500).json({error: err}))
}

module.exports = {
    storeNftHelper,
    likeNftHelper,
    getNftsHelper,
    getNftHelper
}