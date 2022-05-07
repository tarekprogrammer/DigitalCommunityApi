var express = require('express')
var route = express.Router()
var imageUp = require('../middelware/imageup')

var controlar = require('../controlar/emergency')

route.post('/add',imageUp,controlar.addEmergencyController)
route.get('/get',controlar.getAllEmergencyController)

module.exports = route