/**
 * Created by jeremycloutier on 1/14/16.
 */
var express = require('express');
var path = require('path');
var User = require('../models/user');
var createUser = require('../modules/createUser');

var router = express.Router();

router.get('/', function(request, response){
    var userArray = [];
    for (var i = 0; i < 20; i++){
        var tempUser = createUser();
        tempUser.save(function(err){
            if(err){
                throw err;
            }
            //console.log(tempUser);
        });
        userArray.push(tempUser);
    }
    response.send(userArray);
});

router.delete('/deleteUserById/:id', function(request, response){
    console.log(request.params.id);
    // user ID passed by our client side to remove.
    var userId = request.params.id;

    //find and remove user specified by id
    User.findById(userId).remove().exec(function(err){
        if(err){
            console.log('Error removing user', err);
        }
    });

    //Find remaining users, send back to client.
    User.find({}).exec(function(err, users){
        if(err){
            console.log('Error getting all users', err);
        }
        response.send(users);
    });
});

module.exports = router;