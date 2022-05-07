var express = require("express");
var app = express();
const cors = require('cors');
var fileUpload = require("express-fileupload");
var bodyparser = require("body-parser");
var paths = require("./paths");

app.use(cors({
  origin: '*'
}))
app.use(express.static(__dirname+'/html'));
app.use(fileUpload()); //use this before bodyparser
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use("/api", paths);

app.use("/uploads", express.static("uploads"));

module.exports = app;
