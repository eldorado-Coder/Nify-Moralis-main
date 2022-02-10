const {
    addCommentHelper,
    getCommentsHelper,
    updateCommentHelper,
    deleteCommentHelper
} = require('../../services/moralis/comment');

async function addComment(req, res) {
    addCommentHelper(req, res);
};

async function updateComment(req, res) {
    updateCommentHelper(req, res);
};

async function getComments(req, res) {
    getCommentsHelper(req, res);
};

async function deleteComment(req, res) {
    deleteCommentHelper(req, res);
};

module.exports = {
    addComment,
    updateComment,
    getComments,
    deleteComment
}