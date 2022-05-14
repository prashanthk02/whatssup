const router = require('express').Router();

const users = ["login page"];

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
      console.log(result.rows[0]);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

module.exports = (db) => {

  router.get('/', (req, res) => {
    getUserByEmail('nhinrichsen0@ezinearticles.com', '2C0?1nvP!B', db);
    res.json(users);
  });

  router.post('/', (req, res) => {
    //retrieve email and password from input form
    const { email, password } = req.body;

    //validate email and password are provided
    if (!email || !password) {
      return res.status(400).send('Wrong email or password');
    }
    //check email and password exist in the database
    getUserByEmail(email, password, db)
      .then(user => {
        if (user) {
          req.session.userID = user.id; // set cookies
          return res.redirect('/');
        } else {
          return res.status(401).send('Invalid! No user found');
        }
      })
      .catch(error => {
        console.log(error);
      });
  });

  return router;
}
