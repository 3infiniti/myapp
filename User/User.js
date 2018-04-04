// User.js
var mongoose = require('mongoose');
var UserSchema;
UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    location: String
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');

//what
