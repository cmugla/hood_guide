'use strict'

const request = require('request');


module.exports = {

  showArticle(req,res,next) {

    request.get({
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        'api-key': process.env.NYTIMES_KEY,
        'q': req.params.hood,
        'sort': "newest",
        'hl': true
      },
    }, (err, response, body)=> {
      if(err) throw err;

      body = JSON.parse(body);
      res.results = body.response
      next()
      }
    )

  }

}
