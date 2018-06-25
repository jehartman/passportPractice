var express = require('express');
var router = express.Router();

//Get homepage -- slash is just the homepage
router.get('/', function(req, res) {
	//this renders a view called index?
	res.render('index');
});

module.exports = router;