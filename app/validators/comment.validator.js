const { body } = require('express-validator');
const { errorMessages} = require('./helper/config');

const addCommentValidation = [
    body('parentId').optional().isString().withMessage(errorMessages.getMessage('parentId','isString')),
    body('depth').optional().isInt().withMessage(errorMessages.getMessage('depth','isInt')),
    body('commentText')
    .notEmpty()
    .withMessage(errorMessages.getMessage('commentText','required'))
    .if(body('commentText').exists())
    .isString()
    .withMessage(errorMessages.getMessage('commentText','isString')),
    body('userId')
    .notEmpty()
    .withMessage(errorMessages.getMessage('userId','required'))
    .if(body('userId').exists())
    .isString()
    .withMessage(errorMessages.getMessage('userId','isString')),
    body('userName')
    .notEmpty()
    .withMessage(errorMessages.getMessage('userName','required'))
    .if(body('userName').exists())
    .isString()
    .withMessage(errorMessages.getMessage('userName','isString')),
];

const updateCommentValidation = [
    body('commentText')
    .notEmpty()
    .withMessage(errorMessages.getMessage('commentText','required'))
    .if(body('commentText').exists())
    .isString()
    .withMessage(errorMessages.getMessage('commentText','isString')),
    body('id')
    .notEmpty()
    .withMessage(errorMessages.getMessage('id','required'))
    .if(body('id').exists())
    .isString()
    .withMessage(errorMessages.getMessage('id','isString')),
];

const getCommentsValidation = [

];

module.exports = {
    addCommentValidation,
    updateCommentValidation,
    getCommentsValidation,
}