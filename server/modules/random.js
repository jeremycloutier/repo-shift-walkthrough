/**
 * Created by jeremycloutier on 1/14/16.
 */
function getRandomNumber(min, max){
    return Math.floor(Math.random() * ((1 + max) - min) + min);
}

module.exports = getRandomNumber;