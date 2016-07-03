const { MongoClient }   = require('mongodb')
const dbConnection      = 'mongodb://localhost:27017/hood_user'
const bcrypt            = require('bcrypt')
const salt              = bcrypt.genSalt(10);

function createSecure(email, password, callback) {
  bcrypt.genSalt(function(err, salt){
    bcrypt.hash(password, salt, function(err,hash){
      console.log('hash:', hash)
      callback(email, hash)
    })
  })
}

function createUser(req,res,next){

  createSecure(req.body.email, req.body.password, saveUser)

  function saveUser(email, hash){
    console.log('email:',email)
    console.log('passwordDigest:',hash)
    // posts to collection
    MongoClient.connect(dbConnection, function(err, db){
      if(err) throw err;

      let userInfo = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: email,
        passwordDigest: hash,
        favoriteArticles: [] ,
        favoriteEvents: []
      }

      db.collection('users')
        .insertOne(userInfo, function(err, result){
          if(err) throw err;

          next();
        })
    })
  }
}

function loginUser(req,res,next){

  let email     = req.body.email;
  let password  = req.body.password;

  MongoClient.connect(dbConnection, function(err,db){
    if(err) throw err;

    db.collection('users')
      .findOne( { "email" : email }, function(err, user){
        if(err) throw err;

        if(user === null) {
          console.log("no user under e-mail", email);
        } else if(bcrypt.compareSync(password, user.passwordDigest)) {
          console.log(user)
          res.user = user;
        } else {
          console.log("password wasn't right")
        }

        next()
      })
  })

}

// function getFavorites(req,res,next){}

function saveArticle(req,res,next){

  let articleTitle  = req.query.articleTitle;
  let articleDesc   = req.query.articleDesc;
  let articleLink   = req.query.articleLink;

  MongoClient.connect(dbConnection, function(err,db){
    if(err) throw err;

    db.collection('users')
      .update(
        { "email": req.session.user.email },
        { $addToSet: {
          "favoriteArticles": {
            "Article Title" : articleTitle,
            "Article Desc"  : articleDesc,
            "Article Link"  : articleLink
          }
        }
      },
      function(err, doc){
        if(err) throw err;
        console.log(doc)
        next()
      }
    )
  })
}


module.exports = { createUser, loginUser, saveArticle }
