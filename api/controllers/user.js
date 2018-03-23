const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const newUser = new User({ username, password });
  newUser.save((err, savedUser) => {
    if (err) {
      res.status(422);
      res.json({ 'Need both username/PW fields': err.message });
      return;
    }
    res.json(savedUser);
  });
};

module.exports = {
  createUser
};
