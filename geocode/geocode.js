const request = require('request');

var geocodeAddress = function (address,callback) {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `https://www.mapquestapi.com/geocoding/v1/address?key=5A1lAN2V77rIW6S3ECLeSNKrf3jonqTl&location=${encodedAddress}`,
        json:true
    },(error,response,body)=>{
        if(error){
            callback('Unable to connect to Google servers.');
        } else if(body.results[0].locations[0].geocodeQualityCode === 'A1XAX'){
            callback('Unable to find that address');
        } else if (body.results[0].locations[0].geocodeQualityCode != 'A1XAX'){
            callback(undefined,{
               address: body.results[0].providedLocation.location,
               latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
        }
    });
};

module.exports={
    geocodeAddress
}