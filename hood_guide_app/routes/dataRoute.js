'use strict'

const nytData         = require('../models/nytData')
const eventful        = require('../models/eventful')
const dataRouter      = require('express').Router()

dataRouter.get('/:hood', nytData.showArticle, eventful.showEvent, function(req,res){
  res.render('hood/index', { articleDocs : res.results.docs,
                                  events : res.eventResults })
  // res.json(res.eventResults)
})

module.exports = dataRouter;
