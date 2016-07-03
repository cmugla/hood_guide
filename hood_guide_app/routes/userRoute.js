const userRouter          = require('express').Router()
const { createUser,
        loginUser,
        saveArticle }     = require('../models/user')

/* CREATE NEW USER */
userRouter.get('/new', function(req,res){
  res.render('user/new', { user : req.session.user });
})

userRouter.post('/new', createUser, loginUser, function(req,res){
  console.log(req.body);
  req.session.user = res.user;

  req.session.save(function(err){
    if(err) throw err;
    res.redirect('/')
  })
})


/* LOGIN */
userRouter.get('/login', function(req,res){
  res.render('user/login', { user : req.session.user });
})

userRouter.post('/login', loginUser, function(req,res){
  console.log(res.user);
  req.session.user = res.user;

  req.session.save(function(err){
    if(err) throw err;
    res.redirect('/')
  })
})

/* LOGOUT */
userRouter.get('/logout', function(req,res){
  req.session.destroy(function(err){
    res.redirect('/')
  })
})

/* SAVE ARTICLES */
userRouter.get('/save', saveArticle, function(req,res){
  res.redirect('/')
})

/* USER PROFILE */
userRouter.get('/profile', function(req,res){
  res.render('user/profile', { user : req.session.user })
})


module.exports = userRouter;
