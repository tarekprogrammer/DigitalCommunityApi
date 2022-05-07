var express = require('express')
var route = express.Router()

var controlar = require('../controlar/route')

route.post('/add',controlar.addRoute)
route.get('/get',controlar.getAllRoute)

module.exports = route