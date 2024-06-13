const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.tomtom.com/search/2/geocode/'+ encodeURIComponent(address) +'.json?key=Mb1hfj3oFAPgYivXrHgAwg8nv1VFoKAt'

    request({url, json:true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.results && body.results.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.results[0].position.lat,
                longitude: body.results[0].position.lon,
                location: body.results[0].address.freeformAddress
            })
        } 
    })
}

module.exports = geocode