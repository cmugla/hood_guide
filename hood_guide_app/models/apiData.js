'use strict'

const request = require('request');


module.exports = {

  showArticle(req,res,next) {

    let neighborhood;
    if(req.query.location) {
      neighborhood = req.query.location
    } else {
      neighborhood = req.query.borough
    }

    request.get({
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        'api-key': process.env.NYTIMES_KEY,
        'q': neighborhood,
        'sort': "newest"
      },
    }, (err, response, body)=> {
      if(err) throw err;

      body = JSON.parse(body);
      res.results = body.response
      next()
      }
    )

  },

  showEvent(req,res,next) {

      let neighborhood = req.query.borough

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
