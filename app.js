var express = require('express');
var app = express();
//adds database file
var db = require('./db'); 



var UserController = require('./User/UserController');
app.use('/users', UserController);
module.exports = app;



app.get('/', function (req, res) {
  res.send('Hello World! this is mario /n does this work');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});