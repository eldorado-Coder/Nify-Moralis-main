const {
    validationResult
} = require('express-validator');
const Comment = require('./../../../model/comment');


async function addCommentHelper(req, res) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: "Request is invalid",
            validation: errors.array()
        });
    }

    let data = {
        author: {
            id: req.body.userId,
            name: req.body.userName
        },
        commentText: req.body.commentText,
        nftId: req.body.nftId
    }

    if ('parentId' in req.body) {
        data.parentId = req.body.parentId
    }
    if ('depth' in req.body) {
        data.depth = req.body.depth
    }
    const comment = new Comment(data);

    comment.save()
        .then(comment => res.json({
            comment: comment
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
}

async function getCommentsHelper(req, res) {
    Comment.find({
            nftId: req.params["nftId"]
        }).sort({
            postedDate: 1
        }).lean().exec()
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
            let threads = {},
                comment
            for (let i = 0; i < comments.length; i++) {
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
                'count': comments.length,
                'comments': threads
            })
        })
        .catch(err => res.status(500).json({
            error: err
        }))
}

async function updateCommentHelper(req, res) {
    let comment = req.body;
    Comment.updateOne({
            _id: comment.id
        }, {
            $set: {
                commentText: comment.commentText
            }
        })
        .exec()
        .then(result => res.status(200).json({
            message: "Comment Updated",
            comment: comment
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
}

async function deleteCommentHelper(req, res) {

    commentId = req.params['commentId']

    let ids = {}
    ids[commentId] = 'value'

    await getChilds(commentId)

    async function getChilds(commentId) {

        const childIds = await Comment.find({ parentId: commentId }).select({"_id": 1}).lean().exec()

        if (childIds.length) {
            for (let i = 0; i < childIds.length; i++) {
                ids[childIds[i]._id.toString()] = 'value'
                await getChilds(childIds[i]._id.toString())
            }
        } else {
            ids[commentId] = 'value'
        }
    }

    const valuesForDelete = Object.keys(ids) 

    Comment.deleteMany({_id: { $in: valuesForDelete}})
    .then(result => res.status(200).json({
        message: "Comments are deleted",
    }))
    .catch(err => res.status(500).json({
        error: err
    }))

}

module.exports = {
    addCommentHelper,
    updateCommentHelper,
    getCommentsHelper,
    deleteCommentHelper
}