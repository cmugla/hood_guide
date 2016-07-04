'use strict'

const request = require('request');
const oauthSignature = require('oauth-signature');
const n = require('nonce')();
const _ = require('lodash');

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

  },

  showYelp(req,res,next) {

    let neighborhood;
    if(req.query.location) {
      neighborhood = req.query.location
    } else {
      neighborhood = req.query.borough
    }

    let httpMethod = 'GET',
        url = 'https://api.yelp.com/v2/search',
        parameters = {
            'location'                : neighborhood,
            'limit'                   : 10,
            'oauth_consumer_key'      : process.env.YELP_CONSUMERKEY,
            'oauth_token'             : process.env.YELP_TOKEN,
            'oauth_nonce'             : n(),
            'oauth_timestamp'         : n().toString().substr(0,10),
            'oauth_signature_method'  : 'HMAC-SHA1',
            'oauth_version'           : '1.0',
        },
        consumerSecret = process.env.YELP_SECRET,
        tokenSecret = process.env.YELP_TOKENSECRET;

    let newParameters = _.assign(parameters)

    // generates a BASE64 encode HMAC-SHA1 hash
    let signature = oauthSignature.generate(httpMethod, url, newParameters, consumerSecret, tokenSecret,
            { encodeSignature: false});

    parameters['oauth_signature'] = signature;

    request.get({
      url: 'https://api.yelp.com/v2/search',
      qs: parameters
    }, function(err, response, body){
      if(err) throw err;

      body = JSON.parse(body);
      console.log(body)
      res.yelpResults = body.businesses;
      next()
      }
    );
  }

}
