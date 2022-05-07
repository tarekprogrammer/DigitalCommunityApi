var express = require('express')
var route = express.Router()
var imageUp = require('../middelware/imageup')

var controlar = require('../controlar/news')

route.post('/add',imageUp,controlar.addNewsController)
route.get('/get',controlar.getAllNewsPaperController)

module.exports = route