/**
 * Created by jeremycloutier on 1/14/16.
 */
var random = require('./random');

var locations = ['West Des Moines, Iowa', 'Acapulco, Mexico', 'Fargo, North Dakota', 'Norman, Oklahoma', 'Minneapolis, Minnesota', 'Portland, Oregon', 'Rio de Janeiro, Brasil'];

function getLocation(){
    return locations[random(0, locations.length -1)];
}

//console.log(getLocation());

module.exports = getLocation;