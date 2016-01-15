/**
 * Created by jeremycloutier on 1/14/16.
 */
var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(request, response){
    var joinedPath = path.join(__dirname, '../public/views/index.html');
    console.log('Joined path', joinedPath);
    response.sendFile(joinedPath);
});

module.exports = router;