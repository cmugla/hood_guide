'use strict'

const request = require('request');


module.exports = {

  showArticle(req,res,next) {

    request.get({
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        'api-key': process.env.NYTIMES_KEY,
        'q': req.query.location,
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

  // showEvent(req,res,next) {

  //   let neighborhood;
  //   let bkneighborhoods = ['Prospect', 'Kensington', 'Midwood', 'Windsor', 'Terrace', 'Wingate', 'Midwood'];
  //   if(req.query.location=='bushwick') {
  //     neighborhood = 'brooklyn'
  //   } else {
  //     neighborhood = req.query.location
  //   }

  //   request.get({
  //     url: "http://api.evdb.com/json/events/search",
  //     qs: {
  //       'app_key': process.env.EVENTFUL_KEY,
  //       'location': neighborhood,
  //       'sort_order': 'popularity'
  //     },
  //   }, function(err, response, body) {
  //     if(err) throw err;
  //     body = JSON.parse(body);

  //     if(body.events.event.length) {
  //       res.eventResults = body.events.event
  //     } else {
  //       res.eventResults = [body.events.event]
  //     }

  //     next()
  //   })

  // }

}
