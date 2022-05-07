var express = require('express')
var route = express.Router()
var imageUp = require('../middelware/imageup')

var controlar = require('../controlar/healthcare')

route.post('/add',imageUp,controlar.addHealthCareController)
route.get('/getByType/:type',controlar.getHealthCareByTypeController)
route.post('/assignDoctor',controlar.assignDoctorForHealthcareController)
route.get('/getById/:health_care_id',controlar.getHealthCareByIdController)

module.exports = route