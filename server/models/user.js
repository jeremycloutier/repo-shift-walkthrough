/**
 * Created by jeremycloutier on 1/14/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    age: Number,
    sex: String,
    location: String,
    twitter: String
});

var User = mongoose.model('users', UserSchema);

module.exports = User;