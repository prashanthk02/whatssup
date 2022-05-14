const router = require('express').Router();

const users = ['Bob', 'Will'];

//define helper function to query database for input registration email
const getUserByEmail = function (email, db) {
  const queryString = `SELECT *
  FROM users
  WHERE email = $1
  `;
  return db.query(queryString, [email])
    .then((result) => {
      console.log(`The user email ${email}, exits on database with name ${result.rows[0].name}`)
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
    getUserByEmail("rbraham1@apache.org", db);
    addUser('Ike Cast', 'ike@cast.org', 'ikeCast', db)
      .then((result) => {
        res.json(result);
      })
  });

  router.post('/', (req, res) => {
    const user = req.body;
    // validate user completes all fields
    if (user.email === "" || user.password === "" || user.name === "") {
      return res.status(403).send("Invalid User");
    }
    getUserByEmail(email, db)
      .then(checkemail => {
        if (checkemail) {
          return res.status(400).send('Email already exists!');
        }
        else {
          addUser(user.name, user.email, user.password) // add new user to database
            .then(result => {
              if (!result) {
                return res.status(400).send({ error: "error" });
              }
              const userID = result.rows[0];
              req.session.userID = userID.id;
              res.json(result);
            });
        }
      });
  })
  return router;
}