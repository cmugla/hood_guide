const homeRouter = require('express').Router();

homeRouter.get('/', function(req, res){
  res.render('home/index', { user : req.session.user })
})

module.exports = homeRouter;
