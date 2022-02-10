const express = require('express');
const router = express.Router();
const routes = require('./config');


for(let i = 0; i < routes.length; i++) {
    let route = require(`.${routes[i]}`)
    router.use(routes[i], route)
}

router.all('*', function(req, res){
    res.status(404).json({error: `${'Cannot ' + req.method}`})
})

module.exports = router;
