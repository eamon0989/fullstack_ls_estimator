var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.originalUrl);
  console.log(req.app.locals);
  res.render('index');
});

module.exports = router;
