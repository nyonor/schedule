const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('user/');
});

router.get('/auth', function(req, res){
    res.send('auth/');
});

module.exports = router;