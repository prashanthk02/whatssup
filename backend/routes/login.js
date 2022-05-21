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
    return db
      .query("SELECT * FROM users")
      .then((result) => {
        return res.json(result.rows);
      })
  });

  router.post('/', (req, res) => {
    //retrieve email and password from input form
    const { email, password } = req.body;

    //validate email and password are provided
    if (!email || !password) {
      return res.json({ error: "Invalid credentials!" })
    }
    //check email and password exist in the database
    getUserByEmail(email, password, db)
      .then(user => {
        if (user) {
          // req.session.userID = user.id; // set cookies
          return res.json(user)
        } else {
          return res.json({ error: `The ${email} or password does not match record` });
        }
      })
      .catch(error => {
        console.log(error);
      });
  });

  return router;
}