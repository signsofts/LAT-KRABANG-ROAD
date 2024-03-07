var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

// const Stripe = require('stripe');
// const stripe = Stripe('sk_test_51OqbwFBToHPQBVt74ob9KPbrEnPyoWFi730pciS6ps36IMhu8eUWsP1GOcvJ3LE6grESDFdtFPmX63q93dVXwIfc007iqCBLFJ');

// var charge = await stripe.charges.retrieve(
//   'ch_3LiiC52eZvKYlo2C1da66ZSQ',
//   {
//     apiKey: 'sk_test_51OqbwFBToHPQBVt74ob9KPbrEnPyoWFi730pciS6ps36IMhu8eUWsP1GOcvJ3LE6grESDFdtFPmX63q93dVXwIfc007iqCBLFJ'
//   }
// );


const express = require('express');
const app = express();

var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');

var loginAdminRouter = require('./routes/Login/loginAdmin');

var AdminRouter = require('./routes/admin');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '50mb' })); // ตั้งค่าขนาด JSON ที่สามารถรับได้
app.use(express.urlencoded({ limit: '50mb', extended: true })); // ตั้งค่าขนาด URL-encoded ที่สามารถรับได้
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/users', usersRouter);
app.use('/', loginAdminRouter);
app.use('/Admin', AdminRouter);
app.use('/', AdminRouter);




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
