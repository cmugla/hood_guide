'use strict'

const nytData = require('../models/nytData')
const articleRouter = require('express').Router()

articleRouter.get('/:hood', nytData.showArticle, function(req,res){
  console.log(req.params)
  res.json(res.results)
})

module.exports = articleRouter;
