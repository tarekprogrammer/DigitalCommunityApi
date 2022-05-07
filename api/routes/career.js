var express = require('express')
var route = express.Router()
var imageUp = require('../middelware/imageup')

var controlar = require('../controlar/career')

route.post('/add',imageUp,controlar.addCareerController)
route.get('/get',controlar.getAllCareerController)

module.exports = route