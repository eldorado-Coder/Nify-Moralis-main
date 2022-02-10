const db = () => {
    const mongoose = require('mongoose')
    const { dbUrl } = require('./config')
    mongoose.connect(dbUrl)
}
module.exports = db;