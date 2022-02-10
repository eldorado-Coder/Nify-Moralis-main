const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const routes = require('./app/routes/moralis/index');
require('./app/db/mongo')()

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}
app.use(allowCrossDomain);
app.use(express.static(__dirname + '/app/public/images'))
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(routes);

app.listen(process.env.PORT || 3000);