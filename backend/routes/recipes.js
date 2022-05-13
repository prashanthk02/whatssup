
const router = require('express').Router();
const  request  = require('request');


const users = ["recipes"];

module.exports = (db) => {
  router.get('/', (req, res) => {
    // res.json(users)
    request('http://www.google.com', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body) // Print the google web page.
      }
    })
  });

  router.post('/', (req,res) => {

  })

  return router;
}