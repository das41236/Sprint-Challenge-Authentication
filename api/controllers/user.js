const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  let { username, password } = req.body;
  const passwordHash = password;
  username = username.toLowerCase();
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const newUser = new User({ username, passwordHash });
  newUser.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports = {
  createUser
};
