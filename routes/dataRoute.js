'use strict'

const apiData         = require('../models/apiData')
const dataRouter      = require('express').Router()

// dataRouter.get('/location', apiData.showArticle, apiData.showYelp, function(req,res){
//   res.render('hood/index', { articleDocs : res.results.docs,
//                                     user : req.session.user,
//                                 location : req.query.location,
//                                  borough : req.query.borough,
//                                     yelp : res.yelpResults })
// })



dataRouter.get('/location', apiData.showArticle, apiData.showEvent, apiData.showYelp, function(req,res){
  res.render('hood/index', { articleDocs : res.results.docs,
                                  events : res.eventResults,
                                    user : req.session.user,
                                location : req.query.location,
                                 borough : req.query.borough,
                                    yelp : res.yelpResults })
})

module.exports = dataRouter;
