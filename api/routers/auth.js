const router = require('express').Router();
const { compareSync, hashSync } = require('bcrypt');
const { Users } = require('../../data/models');
const { generateToken, validateBody } = require('../middleware/authenticate');

router
  .post('/register', validateBody, register)
  .post('/login', login);

function register (req, res) {
  let user = req.body;
  const hash = hashSync(user.password, 12);
  user.password = hash;

  Users
    .add(user)
    .then(user => res.status(201).json({
      message: 'User added successfully',
      user,
    }))
    .catch(error => res.status(500).json({
      message: 'Check register function in auth.js',
      error: `${error}`,
    }));
}

function login(req, res) {
  let { email, password } = req.body;

  Users
    .findBy({ email })
    .first()
    .then(user => {
      if (user && compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome, ${user.first_name}!`,
          token,
          user,
        });
      } else {
        res.status(401).json({
          message: 'Check username and password and try again',
        });
      }
    })
    .catch(error => res.status(500).json({
      message: 'Server error, check login function in auth.js',
      error: `${error}`,
    }));
}

module.exports = router;