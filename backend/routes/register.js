const router = require('express').Router();

const users = ['Bob', 'Will'];

//define helper function to query database for input registration email
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

//define a helper function to add new user to database
const addUser = function(name, email, password) {
  const queryString = `INSERT INTO users (name, email, password)
VALUES(
$1, $2, $3) RETURNING *`;
  return db.query(queryString, [name, email, password]);
};

module.exports = (db) => {
  
  router.get('/', (req, res) => {
    res.json(users);
  });

  router.post('/', (req,res) => {
    const user = req.body;
    // validate user completes all fields
    if (user.email === "" || user.password === "" || user.name === "") {
      return res.status(403).send("Invalid User");
    }
    getEmail(email)
      .then(checkemail => {
        if (checkemail) {
          res.status(400).send('Email already exists');
        }
        else {
          addUser(user.name, user.email, user.password) // add new user to database
            .then(result => {
              if (!result) {
                return res.status(400).send({ error: "error" });
              }
              const userID = result.rows[0];
              req.session.userID = userID.id;
            });
        }
      });
  })
  return router;
}