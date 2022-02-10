const express = require('express');
const router = express.Router();
const userController = require('../../controllers/moralis/user.controller');
const userValidators = require('../../validators/user.validator');
const authMiddleware = require('./../../middleware/auth');

router.post('/register', userValidators.registrationValidation, userController.userRegistration);

router.post('/login', userValidators.loginValidation, userController.userLogin);

router.put('/refresh-token', authMiddleware, userController.refreshToken);

// User Profile
router.get('/profile', authMiddleware, userController.userProfile);

module.exports = router;