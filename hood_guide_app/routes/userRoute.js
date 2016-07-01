const userRouter =

userRouter.get('/new', function(req, res){
  res.render('user/new')
})

module.exports = userRouter;
