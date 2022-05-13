var express = require('express');
var router = express.Router();

/* GET home page. */ 
module.exports = (db) => {
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  return router
}

