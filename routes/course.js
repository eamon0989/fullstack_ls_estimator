var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let course;
  
  if (req.originalUrl === '/javascript') {
    course = { title: 'JavaScript', course: 'javascript', first: 'JS109' };
  } else {
    course = { title: 'Ruby', course: 'ruby', first: 'RB109' };
  }
  req.app.locals.course = course;
  console.log(req.app.locals);

  res.render('course', {...course});
});

module.exports = router;
