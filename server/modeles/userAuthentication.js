var mongoose=require('mongoose');
var schema = new mongoose.Schema({
        username: String,
        password: String
      });
var userRegister = mongoose.model('userinfo', schema);

module.exports = userRegister;
