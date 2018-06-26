var express = require('express');
var router = express.Router();

var User = require('../models/user');

//register
router.get('/register', function(req, res) {
	res.render('register');
});

//login
router.get('/login', function(req, res) {
	//i believe this is telling it to render a view called login that will be created later in this tutorial
	res.render('login');
});

//register user
router.post('/register', function(req, res) {
	//gets what is posted and captures as variables
	var name = req.body.name; //this is the request from the web page, what is body? the body of the request makes sense
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Invalid email address').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

	if(errors){
		res.render('register', {
			errors:errors
		});
	} else {
		var newUser = new User({
			name: name,
			email: email,
			username: username,
			password: password
		});

		User.createUser(newUser, function(err, user){
			if(err) throw err; 
			console.log(user);
		});

		req.flash('success_msg', 'Yay! You have registered. You can log in now.');

		res.redirect('/users/login');
	}
});



module.exports = router;