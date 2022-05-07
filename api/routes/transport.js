const express = require('express')
const route = express.Router()
//const imageUp = require('../middelware/imageup')
const controller = require('../controlar/transport')

route.post('/add', controller.addATransportController)
route.get('/getSc', controller.getScheduleTransportController)
route.get('/getRc', controller.getRentTransportController)
route.get('/getAmb', controller.getAmbulanceTransportController)

module.exports = route

