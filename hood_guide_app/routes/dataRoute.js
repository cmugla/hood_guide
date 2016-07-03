'use strict'

const apiData         = require('../models/apiData')
const dataRouter      = require('express').Router()

dataRouter.get('/location', apiData.showArticle, apiData.showEvent, function(req,res){
  res.render('hood/index', { articleDocs : res.results.docs,
                                  events : res.eventResults,
                                    user : req.session.user,
                                location : req.query.location,
                                 borough : req.query.borough })
})

module.exports = dataRouter;
