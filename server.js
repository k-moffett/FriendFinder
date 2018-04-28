const fs = require('fs')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const html_router = require('./app/routing/htmlRoutes.js')
const api_router = require('./app/routing/apiRoutes.js')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

html_router(app, fs)
api_router(app, fs)



app.listen(1337);