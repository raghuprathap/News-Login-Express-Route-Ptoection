var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var httpProxy = require("http-proxy");
var routes = require('./routes/index');
var users = require('./routes/users');
var news = require('./routes/news');
var userinfo = require('./modeles/userAuthentication');
//var news = require('./routes/news/login');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var connectflash = require('connect-flash');

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("../webpack.config");
var webpackHotMiddleware = require('webpack-hot-middleware');

var mongoose = require('mongoose');
var uristring = 'mongodb://localhost/test';

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log('Succeeded connected to: ' + uristring);
  }
});

var app = express();
var compiler = webpack(webpackConfig);

var apiProxy = httpProxy.createProxyServer();

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }, // Same as `output.publicPath` in most cases.
  quiet: true,
  noInfo: true,
  host: '0.0.0.0',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
}))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/assets')));
//
app.use(require('express-session')({ secret: 'accesskey' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(connectflash());
app.use('/', routes);
app.use('/users', users);
app.use('/news', news);

app.get('/logout', function (req, res) {
  console.log('Session deleted');
  req.session.destroy();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


passport.use(new LocalStrategy(
  function (username, password, done) {
    userinfo.findOne({ username: username, password: password }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      //  if (!users.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  userinfo.findById(id, function (err, user) {
    done(err, user);
  });
});

module.exports = app;
