const router = require('express').Router();
const axios = require("axios");

const users = [];

const searchByIngredients = (req, res) => {
  const ingredients = 'potato, mushroom'//req.params;
  axios
    .get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.apiKey}&ingredients=${ingredients}&number=6`)
    .then((response) => res.send(response.data))
}

module.exports = (db) => {
  router.get('/', searchByIngredients)
  // router.get('/', (req, res) => {
  //   res.json(searchByIngredients());
  // });
  return router;
}