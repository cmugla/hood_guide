'use strict'

const nytData = require('../models/nytData')
const articleRouter = require('express').Router()

articleRouter.get('/:hood', nytData.showArticle, function(req,res){
  res.render('hood/index', {articleDocs : res.results.docs})
})

module.exports = articleRouter;
