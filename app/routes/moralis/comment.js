const express = require('express');
const router = express.Router();
const commentsController = require('../../controllers/moralis/comment.controller')
const commentsValidators = require('../../validators/comment.validator')
const authMiddleware = require('./../../middleware/auth');


router.post('/', authMiddleware, commentsValidators.addCommentValidation, commentsController.addComment)

// router.get('/:nftId', commentsValidators.getCommentsValidation, commentsController.getComments)

router.put('/', authMiddleware, commentsValidators.updateCommentValidation, commentsController.updateComment)

router.delete('/:commentId', authMiddleware, commentsController.deleteComment)

module.exports = router;