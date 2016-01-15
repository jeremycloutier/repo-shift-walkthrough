/**
 * Created by jeremycloutier on 1/14/16.
 */
var random = require('./random');

function determineSex(){
    var num = random(0, 2);

    if(num == 0){
        return 'Male';
    } else if (num == 1){
        return 'Female';
    } else {
        return 'Other';
    }
}

//console.log(determineSex());

module.exports = determineSex;