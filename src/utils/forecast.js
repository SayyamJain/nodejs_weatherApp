const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=64c0f09038694d60b8553339240206&q=' + latitude + ',' + longitude

    request({url, json:true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.results && body.results.length === 0) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.current.condition.text + '. It is curently ' + body.current.temp_c + ' degrees out. It feels like ' + body.current.feelslike_c + ' degrees out.')
        } 
    })
}

module.exports = forecast