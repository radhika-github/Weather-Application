const request = require('request');

var getWeather=(latitide,longitude,callback)=>{
    request({
        url: `https://api.darksky.net/forecast/df1795a39bb04076d90920b68f76c688/${latitide},${longitude}`,
        json:true
    },(error,response,body)=>{
        // if(error){
        //     console.log('Unable to connect to Forecast.io server');
        // } else if(response.statusCode === 400){
        //     console.log('Unable to fetch weather.');
        // } else if(response.statusCode === 200) {
        //     console.log(body.currently.temperature);
        // }

        if(!error && response.statusCode===200){
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else{
            callback('Unable to fetch weather.');
        }
    });
};

module.exports={
    getWeather
};
