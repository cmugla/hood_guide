'use strict'

const apiData         = require('../models/apiData')
const dataRouter      = require('express').Router()

dataRouter.get('/location', apiData.showArticle, function(req,res){
  res.render('hood/index', { articleDocs : res.results.docs,
                                    user : req.session.user })
  // res.json(res.eventResults)
})

// dataRouter.get('/location', apiData.showArticle, apiData.showEvent, function(req,res){
//   res.render('hood/index', { articleDocs : res.results.docs,
//                                   events : res.eventResults })
//   // res.json(res.eventResults)
// })

module.exports = dataRouter;
