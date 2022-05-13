const router = require('express').Router();

const users = ['recipe details'];

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.json(users);
  });

  router.post('/', (req, res) => {
  
  });
  
  return router;
}