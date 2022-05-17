const router = require('express').Router();


//helper function to query database.
const addRecipe = function (user_id, recipe_id, title, image, db) {
    const queryString = `INSERT INTO favorites(user_id, recipe_id, title, image)
    VALUES ($1, $2, $3, $4) RETURNING *`;

    return db.query(queryString, [user_id, recipe_id, title, image]);
  };

module.exports = (db) => {


  return router;
}

