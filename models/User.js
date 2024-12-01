const mongoose = require('mongoose');
const userData = new mongoose.Schema({
 name: String,
 password: String,
 role:String,
 stage:String,
});

const User = mongoose.model('User', userData);
console.log('created');

module.exports = User;