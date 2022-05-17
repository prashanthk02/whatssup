const router = require('express').Router();


//helper function to query database.
const addRecipe = function (user_id, recipe_id, title, image, db) {
  const queryString = `INSERT INTO favorites(user_id, recipe_id, title, image)
    VALUES ($1, $2, $3, $4) RETURNING *`;

  return db.query(queryString, [user_id, recipe_id, title, image])
    .then((result) => {
      return result.rows[0];
    });
};

module.exports = (db) => {

  router.get('/', (req, res) => {

    return db
      .query("SELECT * FROM recipes")
      .then((result) => {
        return res.json(result.rows);
      })
  });

  router.post('/favorite', (req, res) => {

    const recipe = req.body;

    if (!recipe.user_id || !recipe.recipe_id || !recipe.title || !recipe.image) {
      return res.json({ error: "More information needed" });
    }
    addRecipe(user_id, recipe_id, title, image, db)
      .then(result => {
        return res.json(result);
      })
      .catch(err => {
        res.json({ error: err.message });
      });
  });

  return router;
}
