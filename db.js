// db.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:lucy2018@mainframe-shard-00-00-dj5lt.mongodb.net:27017,mainframe-shard-00-01-dj5lt.mongodb.net:27017,mainframe-shard-00-02-dj5lt.mongodb.net:27017/test?ssl=true&replicaSet=MainFrame-shard-0&authSource=admin');

console.log("Cluster Database Connected")