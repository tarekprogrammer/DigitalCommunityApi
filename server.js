var express = require("express");
var app = require("./api/app");
var port = 3000 || process.env.port;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
