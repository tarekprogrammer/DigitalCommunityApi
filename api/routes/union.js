const exprees = require('express');
const route = exprees.Router();
const controller = require('../controlar/union');
const imageUp = require('../middelware/imageup')

//add a village
route.post("/add",imageUp, controller.addUnionController);
route.get("/get",controller.getUnionsController)
route.get('/getUnion/:union_id', controller.getUnionByUnionIdController)
route.get('/getUnionByUpid/:up_id',controller.getUnionsByUpIdController)


module.exports = route;

