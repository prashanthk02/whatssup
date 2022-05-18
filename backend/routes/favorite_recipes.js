const router = require('express').Router();


//helper function to query database.
const addRecipe = function (user_id, recipeID, title, image, db) {
  const queryString = `INSERT INTO favorites(user_id, title, image)
    VALUES ($1, $2, $3, $4) RETURNING *`;

  return db.query(queryString, [user_id, recipeID, title, image])
    .then((result) => {
      return result.rows[0];
    });
};

//helper function to query database.
const deleteRecipe = function (recipeID, db) {
  const queryString = `DELETE from favorites where recipeID = $1;`;
  return db.query(queryString, [recipeID]);
};

module.exports = (db) => {

  router.get('/', (req, res) => {
    return db
      .query("SELECT * FROM favorites")
      .then((result) => {
        return res.json(result.rows);
      })
  });

  router.post('/', (req, res) => {

    const recipe = req.body;

    if (!recipe.user_id || !recipe.id || !recipe.title || !recipe.image) {
      return res.json({ error: "More information needed" });
    }
    addRecipe(recipe.user_id, recipe.id, recipe.title, recipe.image, db)
      .then(result => {
        return res.json(result);
      })
      .catch(err => {
        res.json({ error: err.message });
      });
  });

  router.delete('/:id', (req, res) => {

    const recipeID = req.params.id;

    if (!user_id ) {
      return res.json({ error: "More information needed" });
    }
    deleteRecipe(recipeID, db)
      .then(result => {
        return res.json({ message: "Succefully deleted recipe from favorite" });
      })
      .catch(err => {
        res.json({ error: err.message });
      });
  });

  return router;
}
