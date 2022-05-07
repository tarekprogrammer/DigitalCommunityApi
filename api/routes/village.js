const exprees = require('express');
const route = exprees.Router();
const controller = require('../controlar/village');
const imageUp = require('../middelware/imageup')

//add a village
route.post("/add",imageUp, controller.addVillageController);
route.get("/get",controller.getVillagesController)
route.get('/getVill/:union_id', controller.getVillagesByUnionIdController)
route.get('/getVillByid/:village_id',controller.getVillageByVillageIdController)


module.exports = route;

