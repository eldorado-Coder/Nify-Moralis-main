const {
    jwtSecret
} = require('../config');
const {
    validationResult,
    matchedData
} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./../../../model/user');

async function userRegistrationHelper(req, res) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Request is invalid",
                validation: errors.array()
            });
        }

        const {
            name,
            email,
            password,
            confirm_password
        } = matchedData(req)

        if (password !== confirm_password) {
            return res.status(400).json({ message: "Your password and confirmation password do not match." });
        }
        const oldUser = await User.findOne({
            email
        });

        if (oldUser) {
            return res.status(409).json({ message: "User Already Exist. Please Login" });
        }

        const encryptedPassword = await bcrypt.hash(password.toString(), 10);
        const data = {
            name,
            email: email.toLowerCase()
        }
        const user = await User.create({
            ...data,
            password: encryptedPassword,
        });
        const token = jwt.sign({
                userId: user.id
            },
            jwtSecret, {
                expiresIn: "7d"
            }
        );
        data.token = token;
        return res.status(201).json({ user: data });
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

async function userLoginHelper(req, res) {

    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Request is invalid",
                validation: errors.array()
            });
        }

        const {
            email,
            password
        } = matchedData(req)

        const user = await User.findOne({
            email
        });

        if (user && (await bcrypt.compare(password.toString(), user.password.toString()))) {
            const data = {
                name: user.name,
                email
            }
            const token = jwt.sign({
                userId: user.id
            }, jwtSecret, {
                expiresIn: "7d"
            });
            
            data.userId = user.id
            data.token = token;
            return res.status(200).json({ user: data });
        }
        return res.status(400).json({ message: "Invalid Credentials" });

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
async function refreshTokenHelper(req, res) {
    const userId = req.userId;
    const token = jwt.sign({
        userId
    }, jwtSecret, {
        expiresIn: "7d"
    });
    return res.status(200).json({ token });
}

async function userProfileHelper(req, res) {
    const userId = req.userId;
    const user = await User.findById(userId, { __v: 0, password: 0 })
    return res.status(200).json({ user });
};

module.exports = {
    userRegistrationHelper,
    userLoginHelper,
    refreshTokenHelper,
    userProfileHelper
}