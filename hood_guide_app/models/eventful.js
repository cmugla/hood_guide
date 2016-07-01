'use strict'

const request = require('request')

module.exports = {

  showEvent(req,res,next) {

    let neighborhood = ['Prospect', 'Kensington', 'Midwood', 'Windsor', 'Terrace', 'Wingate', 'Midwood'];
    if(req.params.hood.includes('bushwick')) {
      neighborhood = 'brooklyn'
    } else {
      neighborhood = req.params.hood
    }

    request.get({
      url: "http://api.evdb.com/json/events/search",
      qs: {
        'app_key': process.env.EVENTFUL_KEY,
        'location': neighborhood
      },
    }, function(err, response, body) {
      if(err) throw err;
      // console.log(body)
      body = JSON.parse(body);
      res.eventResults = body.events.event
      next()
    })

  }

}
