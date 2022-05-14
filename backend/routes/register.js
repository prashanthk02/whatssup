const router = require('express').Router();

const users = ['Bob', 'Will'];

const getUserByEmail = function(email) {
  const queryString = `SELECT *
  FROM users
  WHERE email = $1
  `;
  return db.query(queryString, [email])
    .then((result) => {
      return result.rows[0];
    });
};


module.exports = (db) => {
  router.get('/', (req, res) => {
    res.json(users);
  });

  router.post('/', (req,res) => {

  })
  return router;
}