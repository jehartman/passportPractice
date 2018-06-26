var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/loginapp');

var db = mongoose.connection;

var UserSchema = mongoose.Schema({
	username: {
		type: String,
		//not sure what index does here
		index: true
	},
	password: {
		type: String,
	},
	email: {
		type: String
	},
	name: {
		type: String
	}
});

//creates a variable that can be exported
var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function (newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
    	bcrypt.hash(newUser.password, salt, function(err, hash) {
			newUser.password = hash;
			newUser.save(callback);
    	});
	});
};