const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, default: null },
    email: { type: String, unique: true, required: true, index: { unique: true } },
    password: String,
    token: { type: String },
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);