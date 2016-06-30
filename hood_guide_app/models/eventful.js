'use strict'

const request = require('request')

module.exports = {

  showEvent(req,res,next) {

    request.get({
      url: "http://api.evdb.com/json/events/search",
      qs: {
        'app_key': process.env.EVENTFUL_KEY,
        'location': req.params.hood
      },
    }, function(err, response, body) {
      if(err) throw err;
      // console.log(body)
      body = JSON.parse(body);
      res.results = body.events.event
      next()
    })


  }

}
