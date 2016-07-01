const homeRouter = require('express').Router();

homeRouter.get('/', function(req, res){
  res.render('home/index')
})

module.exports = homeRouter;
