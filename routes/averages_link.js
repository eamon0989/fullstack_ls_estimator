var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  req.url = '/averages';
  next();
});

router.get('/averages', function(req, res, next) {
  res.render('averages_link');
});

module.exports = router;
