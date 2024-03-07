var express = require('express');
var router = express.Router();
var mysql=require('../connect');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});
router.get('/formlogin', function(req, res, next) {
  res.render('Loginform/formlogin', { title: 'formlogin' });
});
router.get('/formcontact', function(req, res, next) {
  res.render('formcontact', { title: 'formcontact' });
});
router.get('/formregister', function(req, res, next) {
  res.render('formregister', { title: 'formregister' });
});
router.get('/formregister', function(req, res, next) {
  res.render('formregister', { title: 'formregister' });
});

module.exports = router;
