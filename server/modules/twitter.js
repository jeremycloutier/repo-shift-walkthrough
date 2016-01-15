/**
 * Created by jeremycloutier on 1/14/16.
 */
var random = require('./random');

var userTwitter = ['@hax0r1337', '@dev_master', '@pass_cracker', '@fun_sunshine', '@fluffybunny', '@kittyfufu', '@kittyfoofoo', '@fredsheahan'];

function generateTwitterHandle(){
    return userTwitter[random(0, userTwitter.length -1)];
}

//console.log(generateTwitterHandle());

module.exports = generateTwitterHandle;