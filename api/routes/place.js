var express = require('express')
var route = express.Router()

var controlar = require('../controlar/place')
var imageUp = require('../middelware/imageup')

route.post('/add',imageUp, controlar.addPlaceController)
route.get('/getPlacesByUpId/:up_id',controlar.getAllPlaceController)
route.get('/placeByPlaceId/:place_id', controlar.getPlaceByPlaceIdController)

module.exports = route