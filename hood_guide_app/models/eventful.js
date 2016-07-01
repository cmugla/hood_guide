'use strict'

const request = require('request')

module.exports = {

  showEvent(req,res,next) {

    let neighborhood;
    let bkneighborhoods = ['Prospect', 'Kensington', 'Midwood', 'Windsor', 'Terrace', 'Wingate', 'Midwood'];
    if(req.params.hood=='bushwick') {
      neighborhood = 'brooklyn'
    } else {
      neighborhood = req.params.hood
    }

    request.get({
      url: "http://api.evdb.com/json/events/search",
      qs: {
        'app_key': process.env.EVENTFUL_KEY,
        'location': neighborhood,
        'sort_order': 'popularity'
      },
    }, function(err, response, body) {
      if(err) throw err;
      body = JSON.parse(body);

      if(body.events.event.length) {
        res.eventResults = body.events.event
      } else {
        res.eventResults = [body.events.event]
      }

      next()
    })

  }

}
