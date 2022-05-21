const router = require('express').Router();

//define helper function to query database for input registration email
const getUserByEmail = function (email, db) {
  const queryString = `SELECT *
  FROM users
  WHERE email = $1
  `;
  return db.query(queryString, [email])
    .then((result) => {
      return result.rows[0];
    });
};

//define a helper function to add new user to database
const addUser = function (name, email, password, db) {
  const queryString = `INSERT INTO users (name, email, password)
VALUES(
$1, $2, $3) RETURNING *`;
  return db.query(queryString, [name, email, password])
    .then((result) => {
      console.log(`Successfully added ${name} to database with id ${result.rows[0].id}!`)
      return result.rows[0];
    });
};


module.exports = (db) => {
  
  router.get('/', (req, res) => {
  });

  router.post('/', (req, res) => {
    const user = req.body;
    // validate user completes all fields
    if (user.email === "" || user.password === "" || user.name === "") {
      return res.json({ error: "Please fill required fields!" })
    }
    getUserByEmail(user.email, db)
      .then(checkemail => {
        if (checkemail) {
          return res.json({ error: `Email already registered!` });
        }
        else {
          addUser(user.name, user.email, user.password, db) // add new user to database
            .then(result => {
              if (!result) {
                return res.json({ error: "error" });
              }
              // req.session.userID = result.id; // check how to set cookies
              return res.json(result);
            });
        }
      });
  })
  return router;
}