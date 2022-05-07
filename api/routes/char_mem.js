var express = require('express')
var route = express.Router()
var imageUp = require('../middelware/imageup')

var controlar = require('../controlar/char_mem')

route.post('/chairman/add',imageUp,controlar.addChairmanController)
route.post('/member/add',imageUp,controlar.addMemberController)
route.get('/chairman/get',controlar.getAllChairman)
route.get('/member/get',controlar.getAllMember)

module.exports = route