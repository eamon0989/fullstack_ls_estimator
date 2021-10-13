var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const bootstrap = require('bootstrap');

var indexRouter = require('./routes/index');
var courseRouter = require('./routes/course');
var averagesRouter = require('./routes/averages');
var getAveragesRouter = require('./routes/getAverages');
var averagesLinkRouter = require('./routes/averages_link');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/home', indexRouter);
app.use('/javascript', courseRouter);
app.use('/ruby', courseRouter);
app.use('/averages', averagesRouter);
app.use('/javascript/averages', averagesRouter);
app.use('/ruby/averages', averagesRouter);
app.use('/getAverages', getAveragesRouter);
app.use('/averages_link', averagesLinkRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
