const router = require('express').Router();

//helper function to query database.
const getUserByEmail = function (email, password, db) {
  const queryStringEmail = `SELECT *
  FROM users
  WHERE email = $1
  AND password = $2`
  const values = [email, password]
  return db
    .query(queryStringEmail, values)
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
}

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.json(users);
  });

  router.post('/', (req, res) => {

  });

  return router;
}