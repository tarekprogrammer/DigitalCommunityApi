var express = require("express");
var app = express();

var village = require("./routes/village");
var union = require('./routes/union')
var place = require('./routes/place')
var transport = require('./routes/transport')
var route = require('./routes/route') 
var doctor = require('./routes/doctor')
var healthCar = require('./routes/healthcare')
var educational = require('./routes/education')
var emergency = require('./routes/emergency')
var career = require('./routes/career')
var news = require('./routes/news')


app.use("/village",village);
app.use('/union',union)
app.use('/place',place)
app.use('/transport',transport)
app.use('/route',route)
app.use('/doctor',doctor)
app.use('/healthcare',healthCar)
app.use('/educational',educational)
app.use('/emergency',emergency)
app.use('/career',career)
app.use('/news',news)




module.exports = app;
