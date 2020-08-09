const router = require('express').Router();
const { Users } = require('../../data/models');

router
  .get('/', readUsers)
  .get('/:id', readUser)
  .put('/:id', updateUser)
  .delete('/:id', deleteUser);

function readUsers (req, res) {

}

function readUser (req, res) {

}

function updateUser (req, res) {

}

function deleteUser (req, res) {

}

module.exports = router;