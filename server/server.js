var express = require('express');
var mongoose = require('mongoose');
var index = require('./routes/index');
var users = require('./routes/users');

var mongoURI = 'mongodb://localhost/27017/repo_shift_walkthrough';            // Establish the address/name for the database.
var mongoDB = mongoose.connect(mongoURI).connection;                  // Establish connection to the database.
var app = express();

app.use(express.static('server/public'));               // Establish server/public as the static folder.
app.use('/', index);                                    // Bring in the router
app.use('/user', users);                                // Bring in users.js, which has our

mongoDB.on('error', function(err){
    console.log(err);
});

mongoDB.once('open', function(){
   console.log('Connected to MongoDB');
});

var server = app.listen(3000, function(){               // request and response are express specific, and only exist inside server file.
    var port = server.address().port;
    console.log('Listening on port', port)
});