'use strict'

const express           = require('express')
const logger            = require('morgan')
const path              = require('path')
const bodyParser        = require('body-parser')
const session           = require('express-session')
const methodOverrise    = require('method-override')

const dataRoute         = require('./routes/dataRoute')
const userRoute         = require('./routes/userRoute')
const homeRoute         = require('./routes/homeRoute')

const app               = express()
const PORT              = process.env.PORT || process.argv[2] || 3000

// set up session
app.use(session({
  saveUnintialized: true,
  resave: true,
  secret: 'sooopersekret',
  cookie: {maxAge: 60000}
}))

// set up logging so that we can see what's happening
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));
app.use('/bower_components', express.static(path.join(__dirname,'bower_components')));

// set up ejs to render the views
app.set('view engine', 'ejs')

// set up method override
app.use(methodOverrise('_method'))

// set up server
app.listen(PORT, function(){
  console.log("server up and running on port ", PORT)
})


/* ROUTES */
app.use('/neighborhoods', dataRoute);
app.use('/user', userRoute);
app.use('/', homeRoute)
