'use strict'

const eventful        = require('../models/eventful')
const eventRouter     = require('express').Router()

eventRouter.get('/:hood', eventful.showEvent, function(req,res){
  console.log(req.params.hood)
  res.render('hood/index', { events : res.results })
  // res.json(res.results)
})

module.exports = eventRouter;
