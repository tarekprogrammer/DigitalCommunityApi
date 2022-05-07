var express = require('express')
var route = express.Router()
var imageUp = require('../middelware/imageup')

var controlar = require('../controlar/doctor')

route.post('/add',imageUp,controlar.addDoctorController)
route.get('/get',controlar.getAllDoctor)

module.exports = route