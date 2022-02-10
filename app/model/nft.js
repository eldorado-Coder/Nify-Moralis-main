const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { appUrl } = require('./../services/moralis/config');

const NftSchema = new Schema({
    userId: { type: String },
    description: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    asset: { type: String, required: true },
    like: { type: Number, default: 0},
}, { timestamps: true });

NftSchema.pre('init', function (doc) {
    doc.asset = appUrl + '/' + doc.asset
});

module.exports = mongoose.model('Nft', NftSchema);