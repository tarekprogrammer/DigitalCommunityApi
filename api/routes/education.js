var express = require('express')
var route = express.Router()
var imageUp = require('../middelware/imageup')

var controlar = require('../controlar/education')

route.post('/add',imageUp,controlar.addEducationalInstituteController)
route.get('/getByType/:type',controlar.getInstituteByTypeController)

module.exports = route