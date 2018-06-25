var express = require('express');
var router = express.Router();

var name;

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
});

console.log(name);

module.exports = router;